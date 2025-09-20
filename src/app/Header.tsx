"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function Header() {
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const openMenu = () => {
    if (mobileMenuRef.current) mobileMenuRef.current.style.display = 'flex';
  };
  const closeMenu = () => {
    if (mobileMenuRef.current) mobileMenuRef.current.style.display = 'none';
  };
  return (
    <header className="dojo-header" style={{ position: 'relative' }}>
      <span className="dojo-logo" style={{display: 'flex', alignItems: 'center', gap: 12}}>
        <Image src="/askam_logo_transparent.png" alt="Logo Askam" width={48} height={48} style={{borderRadius: 8, background: 'transparent'}} />
        Askam
      </span>
      <nav className="dojo-nav desktop-menu" style={{ display: 'flex', gap: 18 }}>
        <Link href="/">Início</Link>
        <Link href="/aulas">Aulas</Link>
        <Link href="/historia">História</Link>
        <Link href="/contato">Contato</Link>
        <Link href="/admin">Administração</Link>
      </nav>
      <button
        className="hamburger-menu"
        aria-label="Abrir menu"
        style={{
          display: 'none',
          background: 'none',
          border: 'none',
          position: 'absolute',
          right: 0,
          top: 18,
          padding: 8,
          cursor: 'pointer',
          zIndex: 20
        }}
        onClick={openMenu}
      >
        <span style={{ display: 'block', width: 28, height: 3, background: 'var(--foreground)', marginBottom: 6, borderRadius: 2 }}></span>
        <span style={{ display: 'block', width: 28, height: 3, background: 'var(--foreground)', marginBottom: 6, borderRadius: 2 }}></span>
        <span style={{ display: 'block', width: 28, height: 3, background: 'var(--foreground)', borderRadius: 2 }}></span>
      </button>
      <div
        id="mobile-menu"
        ref={mobileMenuRef}
        style={{
          display: 'none',
          flexDirection: 'column',
          position: 'fixed',
          top: 0,
          right: 0,
          width: '70vw',
          maxWidth: 320,
          height: '100vh',
          background: 'var(--surface)',
          boxShadow: '-2px 0 16px #0003',
          zIndex: 100,
          padding: '2.5rem 1.5rem 1.5rem 1.5rem',
          gap: 24
        }}
      >
        <button
          aria-label="Fechar menu"
          style={{
            background: 'none',
            border: 'none',
            position: 'absolute',
            top: 18,
            right: 18,
            fontSize: 32,
            color: 'var(--foreground)',
            cursor: 'pointer'
          }}
          onClick={closeMenu}
        >×</button>
        <Link href="/" onClick={closeMenu}>Início</Link>
        <Link href="/aulas" onClick={closeMenu}>Aulas</Link>
        <Link href="/historia" onClick={closeMenu}>História</Link>
        <Link href="/contato" onClick={closeMenu}>Contato</Link>
        <Link href="/admin" onClick={closeMenu}>Administração</Link>
      </div>
      <style>{`
        @media (max-width: 700px) {
          .desktop-menu { display: none !important; }
          .hamburger-menu { display: block !important; }
        }
      `}</style>
    </header>
  );
}