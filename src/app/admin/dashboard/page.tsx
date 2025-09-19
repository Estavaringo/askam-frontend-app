"use client";
import { useState } from "react";

type Aluno = {
  id: number;
  nome: string;
  idade: string;
  faixa: string;
};

export default function Dashboard() {
  const [alunos, setAlunos] = useState<Aluno[]>([]);
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [faixa, setFaixa] = useState("");
  const [editId, setEditId] = useState<number|null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!nome.trim() || !idade.trim() || !faixa.trim()) return;
    if (editId !== null) {
      setAlunos(alunos.map(a => a.id === editId ? { ...a, nome, idade, faixa } : a));
      setEditId(null);
    } else {
      setAlunos([
        ...alunos,
        { id: Date.now(), nome, idade, faixa }
      ]);
    }
    setNome("");
    setIdade("");
    setFaixa("");
  }

  function handleEdit(aluno: Aluno) {
    setEditId(aluno.id);
    setNome(aluno.nome);
    setIdade(aluno.idade);
    setFaixa(aluno.faixa);
  }

  function handleDelete(id: number) {
    setAlunos(alunos.filter(a => a.id !== id));
    if (editId === id) {
      setEditId(null);
      setNome("");
      setIdade("");
      setFaixa("");
    }
  }

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
      <form onSubmit={handleSubmit} style={{ marginBottom: 32, background: '#232323', borderRadius: 8, padding: 20 }}>
        <h3 style={{ color: '#fff', marginBottom: 16, fontWeight: 600, fontSize: 20 }}>{editId ? 'Editar Aluno' : 'Cadastrar Aluno'}</h3>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 12 }}>
          <input
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={e => setNome(e.target.value)}
            style={{ flex: 2, minWidth: 120, padding: 10, borderRadius: 5, border: '1.5px solid #444', background: '#181818', color: '#fff', fontSize: 16 }}
            required
          />
          <input
            type="number"
            placeholder="Idade"
            value={idade}
            onChange={e => setIdade(e.target.value)}
            style={{ width: 80, padding: 10, borderRadius: 5, border: '1.5px solid #444', background: '#181818', color: '#fff', fontSize: 16 }}
            required
          />
          <input
            type="text"
            placeholder="Faixa"
            value={faixa}
            onChange={e => setFaixa(e.target.value)}
            style={{ width: 100, padding: 10, borderRadius: 5, border: '1.5px solid #444', background: '#181818', color: '#fff', fontSize: 16 }}
            required
          />
        </div>
        <button type="submit" style={{ background: 'var(--primary)', color: '#fff', padding: '0.6em 1.5em', border: 'none', borderRadius: 5, fontWeight: 700, cursor: 'pointer', fontSize: 16, marginTop: 8 }}>
          {editId ? 'Salvar' : 'Cadastrar'}
        </button>
        {editId && (
          <button type="button" onClick={() => { setEditId(null); setNome(""); setIdade(""); setFaixa(""); }} style={{ marginLeft: 16, background: '#444', color: '#fff', padding: '0.6em 1.5em', border: 'none', borderRadius: 5, fontWeight: 700, cursor: 'pointer', fontSize: 16 }}>
            Cancelar
          </button>
        )}
      </form>
      <h3 style={{ color: '#fff', marginBottom: 12, fontWeight: 600, fontSize: 20 }}>Alunos cadastrados</h3>
      {alunos.length === 0 ? (
        <div style={{ color: '#bbb', textAlign: 'center', marginTop: 16 }}>Nenhum aluno cadastrado.</div>
      ) : (
        <table style={{ width: '100%', background: '#232323', borderRadius: 8, overflow: 'hidden', color: '#fff', fontSize: 16 }}>
          <thead>
            <tr style={{ background: '#222' }}>
              <th style={{ padding: 8, fontWeight: 700 }}>Nome</th>
              <th style={{ padding: 8, fontWeight: 700 }}>Idade</th>
              <th style={{ padding: 8, fontWeight: 700 }}>Faixa</th>
              <th style={{ padding: 8 }}></th>
            </tr>
          </thead>
          <tbody>
            {alunos.map(aluno => (
              <tr key={aluno.id}>
                <td style={{ padding: 8 }}>{aluno.nome}</td>
                <td style={{ padding: 8 }}>{aluno.idade}</td>
                <td style={{ padding: 8 }}>{aluno.faixa}</td>
                <td style={{ padding: 8, display: 'flex', gap: 8 }}>
                  <button onClick={() => handleEdit(aluno)} style={{ background: '#ffd600', color: '#181818', border: 'none', borderRadius: 4, padding: '0.3em 1em', fontWeight: 700, cursor: 'pointer' }}>Editar</button>
                  <button onClick={() => handleDelete(aluno.id)} style={{ background: '#b71c1c', color: '#fff', border: 'none', borderRadius: 4, padding: '0.3em 1em', fontWeight: 700, cursor: 'pointer' }}>Excluir</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
