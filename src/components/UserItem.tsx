import { Usuario } from "../types/Usuario";
import { Button } from "./Button";

interface UserItemProps {
  usuario: Usuario;
  onRemove: (id: number) => void;
  onEdit?: (usuario: Usuario) => void;
}

export function UserItem({ usuario, onRemove, onEdit }: UserItemProps) {
  return (
    <li
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px",
        backgroundColor: "#fff",
        border: "1px solid #e9ecef",
        borderRadius: "4px",
        marginBottom: "8px",
      }}
    >
      <span>
        <strong>{usuario.nome}</strong> (ID: {usuario.id})
      </span>
      <div>
        {onEdit && (
          <Button onClick={() => onEdit(usuario)} variant="secondary">
            ✏️ Editar
          </Button>
        )}
        <Button onClick={() => onRemove(usuario.id)} variant="danger">
          🗑️ Remover
        </Button>
      </div>
    </li>
  );
}
