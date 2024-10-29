import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Atharva Tiwari",
  description: "Atharva Tiwari's Portfolio page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style>
          {` 
            body {
              background: black;
            }
          `}
        </style>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
