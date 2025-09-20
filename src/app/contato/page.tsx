"use client";

export default function Contato() {
  return (
    <div style={{ maxWidth: 500, margin: '0 auto', padding: '2rem 1rem' }}>
      <h1 style={{ color: 'var(--primary)', fontSize: 28, fontWeight: 700, marginBottom: 24 }}>Contato</h1>
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
    </div>
  );
}
