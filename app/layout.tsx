
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nova Capital | Trade Your Skill",
  description: "Nova Capital — Build consistency. Prove your skill. Earn your payout.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
