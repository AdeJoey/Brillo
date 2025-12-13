import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brillo",
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
      </body>
    </html>
  );
}


