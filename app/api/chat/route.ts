export async function POST(req: Request) {
  const { message, page } = await req.json();

  // Define context for each page
  const pageContexts: Record<string, string> = {
    '/': 'Welcome to DuoLingo! This is the homepage where users can start their language learning journey.',
    '/learn': 'The Learn page offers structured lessons to help users acquire new vocabulary and grammar skills.',
    '/challenge': 'On the Challenge page, users can test their knowledge through various quizzes and exercises.',
    '/leaderboard': 'The Leaderboard showcases top-performing users, encouraging friendly competition.',
    '/profile': 'The Profile page allows users to view and edit their personal information and track progress.',
    '/settings': 'In Settings, users can customize their learning experience, including language preferences and notifications.',
    // Add additional routes and their contexts as needed
  };

  const context = pageContexts[page] || 'General context for the chatbot.';

  // Call to OpenAI API with the context
  const openaiRes = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: `Use the following context to assist the user:\n${context}` },
        { role: 'user', content: message },
      ],
    }),
  });

  const data = await openaiRes.json();
  const reply = data.choices?.[0]?.message?.content;
  return Response.json({ reply });
}
