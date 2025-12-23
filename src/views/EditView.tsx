import { useState } from "react";
import { Usuario } from "../types/Usuario";

interface EditViewProps {
  usuarios: Usuario[];
  setUsuarios: (usuarios: Usuario[]) => void;
}

export function EditView({ usuarios, setUsuarios }: EditViewProps) {
  const [editingId, setEditingId] = useState<number | null>(null);
  const [textoEdicao, setTextoEdicao] = useState("");

  function iniciarEdicao(usuario: Usuario) {
    setEditingId(usuario.id);
    setTextoEdicao(usuario.nome);
  }

  function salvarEdicao() {
    if (textoEdicao.trim() === "") return;

    const novaLista = usuarios.map((usuario) => {
      return usuario.id === editingId
        ? { ...usuario, nome: textoEdicao }
        : usuario;
    });

    setUsuarios(novaLista);
    setEditingId(null);
  }

  function cancelarEdicao() {
    setEditingId(null);
    setTextoEdicao("");
  }

  return (
    <div>
      <h2>✏️ Editar Usuários</h2>
      {usuarios.length === 0 ? (
        <p style={{ textAlign: "center", color: "#999" }}>
          Nenhum usuário para editar. Adicione um primeiro!
        </p>
      ) : editingId ? (
        <div style={{ padding: "20px 0" }}>
          <p>
            Editando:{" "}
            <strong>{usuarios.find((u) => u.id === editingId)?.nome}</strong>
          </p>
          <input
            value={textoEdicao}
            onChange={(e) => setTextoEdicao(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && salvarEdicao()}
            placeholder="Novo nome"
            autoFocus
          />
          <button onClick={salvarEdicao}>💾 Salvar</button>
          <button onClick={cancelarEdicao} style={{ marginLeft: "10px" }}>
            ❌ Cancelar
          </button>
        </div>
      ) : (
        <ul>
          {usuarios.map((usuario) => (
            <li key={usuario.id}>
              <span>{usuario.nome}</span>
              <button onClick={() => iniciarEdicao(usuario)}>✏️ Editar</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
