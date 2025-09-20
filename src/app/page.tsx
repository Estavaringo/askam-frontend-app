"use client";
import Image from "next/image";
export default function Home() {
  return (
    <div>
      <section style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
        <h1 className="dojo-title">ASKAM</h1>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 32, flexWrap: 'wrap', margin: '1.5rem 0' }}>
          <Image src="/askam_logo_transparent.png" alt="Logo Askam" width={100} height={100} style={{ borderRadius: 12, background: 'transparent', boxShadow: '0 2px 8px #0001' }} />
          <Image src="/fpak_logo_transparent.png" alt="Federação de Karatê" width={100} height={100} style={{ borderRadius: 12, background: 'transparent', boxShadow: '0 2px 8px #0001' }} />
        </div>
        <p style={{ fontSize: '1.2rem', maxWidth: 700, margin: '0 auto' }}>
          Nosso dojo é dedicado à prática e ensino do karatê tradicional, promovendo disciplina, respeito e saúde física e mental. Venha fazer parte dessa jornada!
        </p>
      </section>

      <section id="sobre" style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ color: 'var(--primary)' }}>Sobre o Dojo</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
          A ASKAM (Associação de Karatê Manoel) foi fundada em 2002 pelo Sensei Manoel Laurentino, faixa preta 4º DAN, árbitro nacional e internacional. Com uma trajetória dedicada ao karatê desde 1979, o Sensei Manoel criou a ASKAM com o objetivo de promover a disciplina, educação e formação de atletas, especialmente entre crianças e jovens carentes. Nosso dojo valoriza o respeito, o equilíbrio emocional e o desenvolvimento técnico, formando não apenas atletas, mas cidadãos exemplares. Venha fazer parte dessa história!
        </p>
      </section>
    </div>
  );
}
