"use client";
import Image from "next/image";

export default function Aulas() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '2rem 1rem' }}>
      <section style={{ marginBottom: '2.5rem' }}>
        <h1 style={{ color: 'var(--primary)', fontSize: 28, fontWeight: 700, marginBottom: 16 }}>Horários das Aulas</h1>
        <ul style={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
          <li>Segunda e Quarta: 19h00 - 20h30 (Adultos e Adolescentes)</li>
          <li>Terça e Quinta: 18h00 - 19h00 (Infantil)</li>
          <li>Sábado: 10h00 - 11h30 (Treino livre)</li>
        </ul>
      </section>
      <section>
        <h2 style={{ color: 'var(--primary)', fontSize: 24, fontWeight: 600, marginBottom: 16 }}>Localização</h2>
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
    </div>
  );
}
