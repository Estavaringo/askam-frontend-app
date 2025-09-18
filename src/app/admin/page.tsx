"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Senha mockada para demonstração
    if (password === "karate123") {
      router.push("/admin/dashboard");
    } else {
      setError("Senha incorreta");
    }
  }

  return (
    <div style={{
      maxWidth: 340,
      margin: "4rem auto",
      padding: 28,
      background: "#181818",
      borderRadius: 12,
      boxShadow: "0 4px 24px #0005"
    }}>
      <h2 style={{ color: "#fff", marginBottom: 28, textAlign: 'center', letterSpacing: 1, fontWeight: 700, fontSize: 28 }}>Administração</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 18 }}>
          <label htmlFor="password" style={{ color: "#fff", fontWeight: 600, fontSize: 16 }}>Senha:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            style={{
              width: "100%",
              padding: 12,
              borderRadius: 6,
              border: "1.5px solid #444",
              marginTop: 8,
              background: "#232323",
              color: "#fff",
              fontSize: 17,
              outline: 'none',
              fontWeight: 500
            }}
          />
        </div>
        {error && <div style={{ color: "#ffd600", marginBottom: 14, fontWeight: 700, textAlign: 'center' }}>{error}</div>}
        <button type="submit" style={{
          background: "var(--primary)",
          color: "#fff",
          padding: "0.7em 1.7em",
          border: "none",
          borderRadius: 5,
          fontWeight: 700,
          cursor: "pointer",
          fontSize: 18,
          marginTop: 10,
          letterSpacing: 1
        }}>
          Entrar
        </button>
      </form>
    </div>
  );
}
