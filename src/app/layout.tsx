
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Askam",
  description: "Associação de Karatê Manoel (ASKAM)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="dojo-header">
          <span className="dojo-logo" style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <Image src="/logo.png" alt="Logo Askam" width={48} height={48} style={{borderRadius: 8, background: '#fff'}} />
            Askam
          </span>
          <nav className="dojo-nav">
            <Link href="/">Início</Link>
            <Link href="/historia">História</Link>
            <Link href="/admin">Administração</Link>
          </nav>
        </header>
        <main style={{ maxWidth: 900, margin: '2rem auto', padding: '0 1rem' }}>{children}</main>
      </body>
    </html>
  );
}
