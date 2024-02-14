import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "ChatGPT",
  description: "Chatgpt Clone using Next14",
  icons: {
    shortcut: "/gptlogo.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex w-full min-h-screen text-white">
        <Sidebar />
        <div className="w-full min-h-screen">{children}</div>
      </body>
    </html>
  );
}
