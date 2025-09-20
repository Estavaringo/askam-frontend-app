
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
    <html lang="pt-BR" style={{ height: '100%' }}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <header className="dojo-header">
          <span className="dojo-logo" style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <Image src="/askam_logo_transparent.png" alt="Logo Askam" width={48} height={48} style={{borderRadius: 8, background: 'transparent'}} />
            Askam
          </span>
          <nav className="dojo-nav">
            <Link href="/">Início</Link>
            <Link href="/aulas">Aulas</Link>
            <Link href="/historia">História</Link>
            <Link href="/contato">Contato</Link>
            <Link href="/admin">Administração</Link>
          </nav>
        </header>
        <main style={{ maxWidth: 900, margin: '2rem auto', padding: '0 1rem', flex: 1 }}>{children}</main>
        <footer style={{
          marginTop: 48,
          padding: '2rem 1rem 1rem 1rem',
          background: 'var(--surface)',
          color: 'var(--muted)',
          borderTop: '1px solid var(--border)',
          fontSize: 15,
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: 32,
          position: 'relative'
        }}>
          <div style={{ flex: 1, minWidth: 180, textAlign: 'left' }}>
            <div style={{ fontWeight: 600, color: 'var(--foreground)', marginBottom: 6 }}>ASKAM &copy; {new Date().getFullYear()}</div>
            <div style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 10 }}>
              "Disciplina, respeito e formação de cidadãos através do Karatê."
            </div>
          </div>
          <nav style={{ flex: 1, minWidth: 180, textAlign: 'center', marginBottom: 10 }}>
            <a href="/aulas" style={{ margin: '0 8px', color: 'var(--accent)', textDecoration: 'none', fontWeight: 600 }}>Onde treinar?</a>
          </nav>
          <div style={{ flex: 1, minWidth: 180, textAlign: 'center', marginBottom: 10 }}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginBottom: 6 }}>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener" aria-label="Instagram" style={{ color: 'var(--accent)' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/></svg>
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener" aria-label="Facebook" style={{ color: 'var(--accent)' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a4 4 0 0 0-4 4v3H7v4h4v8h4v-8h3l1-4h-4V6a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://wa.me/5599999999999" target="_blank" rel="noopener" aria-label="WhatsApp" style={{ color: 'var(--accent)' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.67 20.13A10 10 0 1 0 3.87 3.87a10 10 0 0 0 13.36 13.36l2.54.73a1 1 0 0 0 1.24-1.24z"/><path d="M8 12a4 4 0 0 0 8 0"/></svg>
              </a>
            </div>
            <div style={{ fontSize: 14, color: 'var(--muted)' }}>
              <a href="mailto:contato@askam.com" style={{ color: 'var(--foreground)', textDecoration: 'none', marginRight: 12 }}>contato@askam.com</a>
              <span style={{ color: 'var(--foreground)' }}>|</span>
              <a href="tel:+5599999999999" style={{ color: 'var(--foreground)', textDecoration: 'none', marginLeft: 12 }}>(99) 99999-9999</a>
            </div>
          </div>
          <div style={{ flex: 1, minWidth: 180, textAlign: 'right' }}>
            <div style={{ marginBottom: 6 }}>Rua dos Guerreiros, 123 - Centro, Cidade/UF</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'flex-end' }}>
              <span style={{ fontSize: 14, color: 'var(--muted)' }}>Filiada a</span>
              <img src="/fpak_logo_transparent.png" alt="FPAK" width={40} height={40} style={{ background: 'transparent', borderRadius: 6, objectFit: 'contain', boxShadow: '0 1px 4px #0001' }} />
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
