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

      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ color: 'var(--primary)' }}>Horários das Aulas</h2>
        <ul style={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
          <li>Segunda e Quarta: 19h00 - 20h30 (Adultos e Adolescentes)</li>
          <li>Terça e Quinta: 18h00 - 19h00 (Infantil)</li>
          <li>Sábado: 10h00 - 11h30 (Treino livre)</li>
        </ul>
      </section>

      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ color: 'var(--primary)' }}>Localização</h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
          <Image src="/santos_dummont_transparent.png" alt="Complexo Esportivo Santos Dumont" width={180} height={120} style={{ borderRadius: 10, objectFit: 'cover', boxShadow: '0 2px 8px #0001', background: 'transparent' }} />
          <div>
            <p>
              Rua dos Guerreiros, 123 - Centro, Cidade/UF<br />
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>
                Ver no Google Maps
              </a>
            </p>
          </div>
        </div>
      </section>

      <section id="contato" style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ color: 'var(--primary)' }}>Contato</h2>
        <form style={{ maxWidth: 400 }} onSubmit={e => { e.preventDefault(); alert('Mensagem enviada!'); }}>
          <div style={{ marginBottom: 12 }}>
            <label htmlFor="nome">Nome</label><br />
            <input id="nome" name="nome" type="text" required style={{ width: '100%', padding: 8, borderRadius: 4, border: '1px solid #ccc' }} />
          </div>
          <div style={{ marginBottom: 12 }}>
            <label htmlFor="email">Email</label><br />
            <input id="email" name="email" type="email" required style={{ width: '100%', padding: 8, borderRadius: 4, border: '1px solid #ccc' }} />
          </div>
          <div style={{ marginBottom: 12 }}>
            <label htmlFor="mensagem">Mensagem</label><br />
            <textarea id="mensagem" name="mensagem" required rows={4} style={{ width: '100%', padding: 8, borderRadius: 4, border: '1px solid #ccc' }} />
          </div>
          <button type="submit" style={{ background: 'var(--primary)', color: '#fff', padding: '0.5em 1.5em', border: 'none', borderRadius: 4, fontWeight: 600, cursor: 'pointer' }}>
            Enviar
          </button>
        </form>
      </section>
    </div>
  );
}
