import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from "../components/Button";
import { Usuario } from "../types/Usuario";

interface EditViewProps {
  usuarios: Usuario[];
  setUsuarios: (usuarios: Usuario[]) => void;
}

export function EditView({ usuarios, setUsuarios }: EditViewProps) {
  const [textoEdicao, setTextoEdicao] = useState("");
  const navigate = useNavigate();

  const { id } = useParams();
  const usuarioParaEditar = usuarios.find(
    (usuario) => usuario.id === Number(id)
  );

  useEffect(() => {
    setTextoEdicao(usuarioParaEditar?.nome || "");
  }, [usuarioParaEditar]);

  function salvarEdicao() {
    if (textoEdicao.trim() === "") return;

    if (usuarioParaEditar) {
      // Garantimos que o usuário existe
      const novaLista = usuarios.map((usuario) => {
        return usuario.id === usuarioParaEditar.id
          ? { ...usuario, nome: textoEdicao }
          : usuario;
      });
      setUsuarios(novaLista);
      alert("Usuário salvo com sucesso!");
      navigate("/"); // Redireciona de volta para a lista após salvar
    }
  }

  // Se o ID da URL não existir (ex: /editar/9999), mostramos erro
  if (!usuarioParaEditar) {
    return <p>Usuário não encontrado!</p>;
  }

  return (
    <div>
      <h2>✏️ Editar Usuário</h2>
      <div style={{ padding: "20px 0" }}>
        <p>
          Editando: <strong>{usuarioParaEditar.nome}</strong>
        </p>
        <input
          value={textoEdicao}
          onChange={(e) => setTextoEdicao(e.target.value)}
          placeholder="Novo nome"
          autoFocus
        />
        <Button onClick={salvarEdicao} variant="primary">
          💾 Salvar
        </Button>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button variant="secondary">❌ Cancelar</Button>
        </Link>
      </div>
    </div>
  );
}
