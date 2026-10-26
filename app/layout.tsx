import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nicole AI Agent",
  description: "Secure Cartesia-powered AI voice agent dashboard",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
