import type { Metadata } from "next";
import { Aurora } from "@/components/layout/Aurora";
import "./globals.css";

export const metadata: Metadata = {
  title: "CODE 2 CHILL · Serious builds. Softer nights.",
  description:
    "A technology studio for people who want the work to be good and the night to end. Workshops, build nights, open projects, and study circles.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased dark">
      <body className="min-h-full flex flex-col bg-[#080b14] text-[#e7eefc] relative selection:bg-cyan-300/30 selection:text-white">
        <Aurora />
        <div className="relative z-10 flex min-h-screen flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
