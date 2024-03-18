import type { Metadata } from "next";
import StarBackground from "../components/StarBackground";
import "../styles/globals.css";
import localFont from "next/font/local";

const anta = localFont({
  src: "../public/fonts/Anta-Regular.ttf",
});

export const metadata: Metadata = {
  title: 'Star Wars Heros',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={anta.className}>
        <StarBackground />
        {children}
      </body>
    </html>
  );
}
