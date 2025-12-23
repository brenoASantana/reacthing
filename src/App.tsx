import { useEffect, useState } from "react";
import "./App.css";
import { Usuario } from "./types/Usuario";
import { AddView } from "./views/AddView";
import { EditView } from "./views/EditView";
import { ListaUsuarios } from "./views/ListView";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {

  const [usuarios, setUsuarios] = useState<Usuario[]>(
    JSON.parse(localStorage.getItem("lista-usuarios") || "[]")
  );

  useEffect(() => {
    localStorage.setItem("lista-usuarios", JSON.stringify(usuarios));
  }, [usuarios]); // Dependências

  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <h1>💼 Reacthing - Gerenciador de Usuários</h1>
        <nav>
          <Link to="/">📋 Lista de Usuários</Link>
          <Link to="/adicionar">➕ Adicionar Usuário</Link>
          <Link to="/editar">✏️ Editar Usuário</Link>
        </nav>
      </header>


      <Routes>
        <Route path="/adicionar" element={<AddView usuarios={usuarios} setUsuarios={setUsuarios} />} />
        <Route path="/editar" element={<EditView usuarios={usuarios} setUsuarios={setUsuarios} />} />
        <Route path="/" element={<ListaUsuarios usuarios={usuarios} setUsuarios={setUsuarios} />} />
      </Routes>

      <footer className="App-footer">
        <p>© 2025 Reacthing - Feito pro Breno Santana</p>
      </footer>
    </div>
  </BrowserRouter>);
}

export default App;
