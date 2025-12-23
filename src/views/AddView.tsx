import { useState } from "react";
import { Usuario } from "../types/Usuario";
import { useNavigate } from 'react-router-dom';

interface AddViewProps {
  usuarios: Usuario[];
  setUsuarios: (usuarios: Usuario[]) => void;
}

export function AddView({ usuarios, setUsuarios }: AddViewProps) {
  const [novoNome, setNovoNome] = useState("");
  const navigate = useNavigate();

  function adicionarUsuario() {
    if (novoNome.trim() === "") return;

    const novoUsuario: Usuario = {
      id: Date.now(),
      nome: novoNome,
    };

    setUsuarios([...usuarios, novoUsuario]);
    setNovoNome("");
    navigate("/");
  }

  return (
    <div>
      <h2>➕ Adicionar Novo Usuário</h2>
      <input
        value={novoNome}
        onChange={(e) => setNovoNome(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && adicionarUsuario()}
        placeholder="Digite um nome"
        autoFocus
      />
      <button onClick={adicionarUsuario}>Adicionar</button>
    </div>
  );
}
