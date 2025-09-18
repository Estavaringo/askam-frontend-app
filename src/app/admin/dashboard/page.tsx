"use client";

export default function Dashboard() {
  return (
    <div style={{
      maxWidth: 600,
      margin: "4rem auto",
      padding: 32,
      background: "#181818",
      borderRadius: 12,
      boxShadow: "0 4px 24px #0005"
    }}>
      <h2 style={{ color: "#fff", marginBottom: 28, textAlign: 'center', letterSpacing: 1, fontWeight: 700, fontSize: 28 }}>Administração</h2>
      <p style={{ color: '#fff', fontSize: 18, marginBottom: 18, textAlign: 'center' }}>
        Bem-vindo! Aqui você poderá cadastrar e gerenciar alunos do dojo.
      </p>
      {/* Em breve: funcionalidades de cadastro e listagem */}
    </div>
  );
}
