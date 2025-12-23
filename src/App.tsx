import { useEffect, useState } from "react";
import "./App.css";
import { Usuario } from "./types/Usuario";
import { AddView } from "./views/AddView";
import { EditView } from "./views/EditView";
import { ListaUsuarios } from "./views/ListView";

function App() {
  const [currentView, setCurrentView] = useState<"list" | "add" | "edit">(
    "list"
  );

  const [usuarios, setUsuarios] = useState<Usuario[]>(
    JSON.parse(localStorage.getItem("lista-usuarios") || "[]")
  );

  useEffect(() => {
    localStorage.setItem("lista-usuarios", JSON.stringify(usuarios));
  }, [usuarios]); // Dependências

  return (
    <div className="App">
      <header className="App-header">
        <h1>💼 Reacthing - Gerenciador de Usuários</h1>
        <nav>
          <button onClick={() => setCurrentView("list")}>
            📋 Lista de Usuários
          </button>
          <button onClick={() => setCurrentView("add")}>
            ➕ Adicionar Usuário
          </button>
          <button onClick={() => setCurrentView("edit")}>
            ✏️ Editar Usuário
          </button>
        </nav>
      </header>

      <main className="App-main">
        {currentView === "list" && (
          <ListaUsuarios usuarios={usuarios} setUsuarios={setUsuarios} />
        )}
        {currentView === "add" && (
          <AddView usuarios={usuarios} setUsuarios={setUsuarios} />
        )}
        {currentView === "edit" && (
          <EditView usuarios={usuarios} setUsuarios={setUsuarios} />
        )}
      </main>

      <footer className="App-footer">
        <p>© 2025 Reacthing - Feito pro Breno Santana</p>
      </footer>
    </div>
  );
}

export default App;
