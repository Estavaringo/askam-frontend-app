"use client";
import Image from "next/image";
export default function Home() {
  return (
    <div>
      <section style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
        <h1 className="dojo-title">Bem-vindo ao Dojo Karate</h1>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 32, flexWrap: 'wrap', margin: '1.5rem 0' }}>
          <Image src="/logo.png" alt="Logo Dojo Karate" width={100} height={100} style={{ borderRadius: 12, background: '#fff', boxShadow: '0 2px 8px #0001' }} />
          <Image src="/federacao_karate.png" alt="Federação de Karatê" width={100} height={100} style={{ borderRadius: 12, background: '#fff', boxShadow: '0 2px 8px #0001' }} />
        </div>
        <p style={{ fontSize: '1.2rem', maxWidth: 700, margin: '0 auto' }}>
          Nosso dojo é dedicado à prática e ensino do karatê tradicional, promovendo disciplina, respeito e saúde física e mental. Venha fazer parte dessa jornada!
        </p>
      </section>

      <section id="sobre" style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ color: 'var(--primary)' }}>Sobre o Dojo</h2>
        <p>
          Fundado pelo Sensei, nosso dojo conta com turmas para todas as idades e níveis. Os treinos são realizados em ambiente acolhedor, com foco no desenvolvimento técnico e valores do karatê.
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
          <Image src="/complexo_esportivo_santos_dummont.jpg" alt="Complexo Esportivo Santos Dumont" width={180} height={120} style={{ borderRadius: 10, objectFit: 'cover', boxShadow: '0 2px 8px #0001' }} />
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
