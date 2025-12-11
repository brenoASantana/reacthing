function ListaUsuarios() {
  // 1. Memória (State)
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [loading, setLoading] = useState<string>("");

  // 2. Ciclo de Vida + Async (Effect)
  useEffect(() => {
    const carregar = async () => {
      setLoading("Carregando...");
      try {
        const dados = await api.get("/usuarios");
        setUsuarios(dados);
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
    setUsuarios(usuarios.filter((u) => u.id !== id));
  }

  // 4. Renderização (View)
  return (
    <div>
      <h1>Lista de Usuários</h1>
      {loading ? (
        <p>{loading}</p>
      ) : (
        <ul>
          {usuarios.map((usuario) => (
            <li key={usuario.id} onClick={() => removerUsuario(usuario.id)}>
              {usuario.id} - {usuario.nome}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
