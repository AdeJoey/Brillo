import type { Metadata } from "next";
import "./globals.css";

import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Brillo | Design Agency",
  description: "Creative Branding Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased bg-background text-foreground selection:bg-accent-red selection:text-white"
        suppressHydrationWarning
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}


