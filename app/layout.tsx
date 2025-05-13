import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { ExitModal } from "@/components/modals/exit-modal";
import { HeartsModal } from "@/components/modals/hearts-modal";
import { PracticeModal } from "@/components/modals/practice-modal";
import Chatbot from "@/components/Chatbot";

import "./globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

const font = Nunito({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GenMath",
  description: "Developed by Chirag Sharma for final year project at GTBIT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={font.className}
        >
          <Toaster />
          <ExitModal />
          <HeartsModal />
          <PracticeModal />
          {children}
          <Chatbot />
        </body>
      </html>

    </ClerkProvider>
    
  );
}
