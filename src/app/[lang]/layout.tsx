import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import { Sparkles } from "lucide-react";
import NotificationBanner from "@/components/ui/notification-banner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Andres Fernandez - Electricat",
  description: "Portafolio de proyectos de Andres Fernandez - Electricat",
  icons: {
    //icon: "/favicon.svg",
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.png', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
        
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen bg-black text-white">
      <NotificationBanner />
      <div className="mx-auto max-w-6xl px-4 py-8">
        {children}
      </div>
      {/* Decorative lightning elements */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 -translate-x-1/2 translate-y-1/2 transform">
          <Sparkles className="h-64 w-64 rotate-45 text-blue-500/20" />
        </div>
        <div className="absolute bottom-0 right-0 translate-x-1/2 -translate-y-1/2 transform">
          <Sparkles className="h-64 w-64 -rotate-45 text-blue-500/20" />
        </div>
      </div>
    </div>
      </body>
    </html>
  );
}
