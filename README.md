# Reacthing 🚀

Um projeto **React + TypeScript** de sistema de gerenciamento de usuários (CRM) construído com foco em boas práticas de desenvolvimento.

## 📋 Sobre

Reacthing é uma aplicação moderna para gerenciar usuários e contatos, inspirada nos princípios de arquitetura limpa do projeto Kaching. Este projeto demonstra padrões recomendados de desenvolvimento em React com TypeScript, incluindo:

- ✅ Componentes funcionais com hooks
- ✅ State management com `useState`
- ✅ Efeitos colaterais com `useEffect`
- ✅ Tipagem forte com TypeScript
- ✅ Formatação automática com Biome
- ✅ Arquitetura modular e escalável

## 🛠️ Stack Tecnológico

- **React** 19.2.3
- **TypeScript** 4.9.5
- **React DOM** 19.2.3
- **Testing Library** para testes
- **Biome** para linting e formatação

## 📦 Instalação

```bash
# Clone o repositório
git clone <seu-repo>
cd reacthing

# Instale as dependências
make install
```

## 🚀 Comandos Disponíveis

### Desenvolvimento

```bash
make dev      # Inicia o servidor de desenvolvimento
make build    # Compila para produção
make watch    # Watch mode com detalhes
```

### Qualidade de Código

```bash
make format   # Formata código com Biome
make lint     # Verifica código com eslint
make test     # Executa testes
make audit    # Verifica vulnerabilidades
```

### Limpeza

```bash
make clean    # Remove node_modules
make clean-all # Remove tudo (node_modules + cache)
```

### Informações

```bash
make help     # Mostra todos os comandos
make version  # Mostra versões instaladas
make info     # Informações do projeto
```

## 📁 Estrutura do Projeto

```plaintext
src/
├── views/                 # Componentes de view
│   ├── AddView.tsx       # Formulário para adicionar usuários
│   ├── ListView.tsx      # Lista de usuários
│   └── EditView.tsx      # Edição de usuários
├── types/                # Definições de tipos TypeScript
│   └── Usuario.ts        # Interface do usuário
├── services/             # Serviços e APIs
│   └── api.ts            # Cliente HTTP
├── App.tsx               # Componente principal
└── index.tsx             # Entrada da aplicação
```

## 💡 Conceitos Principais

### Estado (State)

Utilizamos `useState` para gerenciar o estado dos usuários e loading:

```typescript
const [usuarios, setUsuarios] = useState<Usuario[]>([]);
const [loading, setLoading] = useState<string>("");
```

### Ciclo de Vida (Effect)

Com `useEffect`, carregamos dados e gerenciamos efeitos colaterais:

```typescript
useEffect(() => {
  // Carrega usuários do servidor
  carregar();
}, []);
```

### Handlers (Ações)

Funções que executam ações no estado:

```typescript
function removerUsuario(id: number) {
  setUsuarios(usuarios.filter((u) => u.id !== id));
}
```

### Renderização (View)

JSX tipado para exibir a interface:

```typescript
return (
  <div>
    <h1>Lista de Usuários</h1>
    {usuarios.map((usuario) => (
      <li key={usuario.id}>{usuario.nome}</li>
    ))}
  </div>
);
```

## 🧪 Testes

Execute os testes com:

```bash
make test
```

## 📝 Configuração

### Biome (`biome.json`)

O projeto utiliza Biome para formatação e linting automático. A configuração inclui:

- 2 espaços de indentação
- Line width de 100 caracteres
- Sem ponto-e-vírgula
- Aspas duplas em JSX

### TypeScript (`tsconfig.json`)

Configuração rigorosa com `strict: true` para máxima segurança de tipos.

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 👨‍💻 Autor

Breno Santana

## 🔗 Links Úteis

- [React Docs](https://react.dev)
- [TypeScript Docs](https://www.typescriptlang.org/docs)
- [Biome Docs](https://biomejs.dev)
