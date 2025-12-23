import { useEffect, useState } from "react";
import { Usuario } from "../types/Usuario";

interface ListViewProps {
  usuarios: Usuario[];
  setUsuarios: (usuarios: Usuario[]) => void;
}

export function ListaUsuarios({ usuarios, setUsuarios }: ListViewProps) {
  // 1. Memória (State)
  const [loading, setLoading] = useState<string>("");

  // 2. Ciclo de Vida + Async (Effect)
  useEffect(() => {
    const carregar = async () => {
      setLoading("Carregando...");
      try {
        // Simula carregamento de dados
        await new Promise((resolve) => setTimeout(resolve, 500));
      } catch (erro) {
        console.error(erro);
      } finally {
        setLoading("");
      }
    };
    carregar();
  }, []);

  // 3. Ação (Handler)
  function removerUsuario(id: number) {
    // Imutabilidade: cria nova lista sem o item
    setUsuarios(usuarios.filter((u: Usuario) => u.id !== id));
  }

  // 4. Renderização (View)
  return (
    <div>
      <h2>📋 Lista de Usuários</h2>
      {loading ? (
        <p>{loading}</p>
      ) : usuarios.length === 0 ? (
        <p style={{ textAlign: "center", color: "#999" }}>
          Nenhum usuário cadastrado. Clique em "Adicionar Usuário" para começar!
        </p>
      ) : (
        <ul>
          {usuarios.map((usuario: Usuario) => (
            <li key={usuario.id}>
              <span>
                {usuario.id} - <strong>{usuario.nome}</strong>
              </span>
              <button onClick={() => removerUsuario(usuario.id)}>
                🗑️ Remover
              </button>
            </li>
          ))}
        </ul>
      )}
      <p style={{ marginTop: "20px", fontSize: "0.9em", color: "#666" }}>
        Total: {usuarios.length} usuário{usuarios.length !== 1 ? "s" : ""}
      </p>
    </div>
  );
}
