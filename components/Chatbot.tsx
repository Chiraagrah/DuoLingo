'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './Chatbot.module.css';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Chatbot() {
  const pathname = usePathname(); // e.g., /learn, /challenge
  const [messages, setMessages] = useState<{ text: string; sender: 'user' | 'bot' }[]>([]);
  const [input, setInput] = useState('');
  const [open, setOpen] = useState(false);
  const idleTimer = useRef<NodeJS.Timeout | null>(null);

  const addMessage = (text: string, sender: 'user' | 'bot') => {
    setMessages((prev) => [...prev, { text, sender }]);
  };

  const sendMessage = async () => {
    if (!input.trim()) return;
    addMessage(input, 'user');
    setInput('');
    addMessage('Thinking...', 'bot');

    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: input, page: pathname }),
    });

    const data = await response.json();
    const reply = data.reply || "Sorry, I couldn't understand that.";

    setMessages((prev) => prev.slice(0, -1));
    addMessage(reply, 'bot');

    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(reply);
      utterance.lang = 'en-US';
      speechSynthesis.speak(utterance);
    }
  };

  const resetIdleTimer = () => {
    if (idleTimer.current) clearTimeout(idleTimer.current);
    idleTimer.current = setTimeout(() => {
      addMessage("Hey! Duo's still here 🐦 Ready to help anytime.", 'bot');
      if ('speechSynthesis' in window) {
        speechSynthesis.speak(new SpeechSynthesisUtterance("Hey! I'm still here, ready when you are!"));
      }
    }, 60000);
  };

  // ✅ Effect for speech cancellation when chatbot closes
  useEffect(() => {
    if (!open && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }, [open]);

  // ✅ Effect for idle detection
  useEffect(() => {
    resetIdleTimer();
    window.addEventListener('mousemove', resetIdleTimer);
    window.addEventListener('keydown', resetIdleTimer);

    return () => {
      window.removeEventListener('mousemove', resetIdleTimer);
      window.removeEventListener('keydown', resetIdleTimer);
      if (idleTimer.current) clearTimeout(idleTimer.current);
    };
  }, []);

  return (
    <div className={styles.chatbotWrapper}>
      <button className={styles.toggleButton} onClick={() => setOpen((o) => !o)}>
        <Image 
          src="mascot.svg"
          alt="duo"
          height={25}
          width={25}
        />
      </button>
      {open && (
        <div className={styles.container}>
          <div className={styles.header}>Ask Duo</div>
          <div className={styles.messages}>
            {messages.map((msg, i) => (
              <div key={i} className={`${styles.message} ${styles[msg.sender]}`}>
                {msg.sender === 'bot' && <img src="/logo.svg" className={styles.avatar} />}
                <span>{msg.text}</span>
              </div>
            ))}
          </div>
          <div className={styles.inputArea}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Ask a doubt..."
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}
