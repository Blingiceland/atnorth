import type { Metadata } from "next";
import "./globals.css";
import { LangProvider } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Jón Bjarni Steinsson — Operations Director Application | atNorth ICE02",
  description:
    "Tax lawyer, operator, and entrepreneur applying for the role of Operations Director at atNorth ICE02.",
  openGraph: {
    title: "Jón Bjarni Steinsson — atNorth ICE02",
    description: "Tax Lawyer. Operator. Entrepreneur. Ready for the next challenge.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
