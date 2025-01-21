# DNC-ARQ-EDER

## 📋 Descrição do Projeto
Este projeto é um site/portfólio desenvolvido com React e Vite, criado durante o curso de React com JavaScript da DNC. O site possui páginas para Home, About, Projects e Contact, com integração de APIs e recursos de navegação.

🔗 Demo do Projeto: [Clique aqui para ver o site](https://project-class-react-js.vercel.app/)

## 🛠️ Tecnologias Utilizadas
- React.js
- Vite
- JavaScript
- CSS
- Context API

## 📁 Estrutura do Projeto
```
DNC-ARQ-EDER/
├── public/
├── src/
│   ├── assets/                 # Recursos estáticos
│   │   ├── brazil-icon.svg
│   │   ├── dnc-logo.svg
│   │   ├── social-media-icons/
│   │   └── ...
│   ├── components/            # Componentes reutilizáveis
│   │   ├── AboutText/
│   │   ├── Banner/
│   │   ├── Button/
│   │   ├── ContactForm/
│   │   ├── Footer/
│   │   ├── Header/
│   │   ├── Hero/
│   │   ├── LoadingSpinner/
│   │   └── ProjectsList/
│   ├── contexts/              # Contextos React
│   │   └── AppContext.jsx
│   ├── pages/                 # Páginas da aplicação
│   │   ├── About.jsx         # Página Sobre
│   │   ├── Contact.jsx       # Página de Contato
│   │   ├── Home.jsx          # Página Inicial
│   │   └── Projects.jsx      # Página de Projetos
│   ├── services/             # Serviços e integrações
│   │   └── apiServices.js    # Serviços de API
│   ├── utils/                # Funções utilitárias
│   │   └── ScrollToTop.jsx   # Componente de rolagem
│   ├── App.jsx               # Componente principal
│   ├── main.css              # Estilos globais
│   └── main.jsx              # Ponto de entrada da aplicação
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── pnpm-lock.yaml
├── README.md
└── vite.config.js
```

## 📱 Páginas

### Home (Home.jsx)
- Página inicial do site
- Contém o componente Hero e apresentação principal

### About (About.jsx)
- Página com informações detalhadas
- Utiliza o componente AboutText

### Projects (Projects.jsx)
- Exibe a lista de projetos
- Integra com ProjectsList para mostrar os trabalhos

### Contact (Contact.jsx)
- Página com formulário de contato
- Utiliza o componente ContactForm

## 🔧 Serviços e Utilidades

### apiServices.js
- Gerencia as chamadas de API
- Integração com serviços externos

### ScrollToTop.jsx
- Componente utilitário para controle de rolagem
- Melhora a experiência de navegação

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Node.js
- pnpm (ou npm/yarn)

### Instalação
1. Clone o repositório
```bash
git clone [URL-DO-SEU-REPOSITORIO]
```

2. Instale as dependências
```bash
pnpm install
```

3. Execute o projeto
```bash
pnpm dev
```

## 🧩 Componentes Principais

### Header
- Navegação principal do site
- Links para todas as seções

### Hero
- Seção principal da página inicial
- Apresentação visual do portfólio

### AboutText
- Informações detalhadas sobre o projeto/pessoa
- Biografia e descrição

### ProjectsList
- Exibição organizada dos projetos
- Cards com descrições e links

### ContactForm
- Formulário para mensagens
- Integração com serviço de envio de emails

### Footer
- Links para redes sociais
- Informações de copyright

## 🤝 Como Contribuir
1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Faça push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request


## 👥 Autor
- Projeto desenvolvido como parte do curso de React com JavaScript da DNC
- Eder Souza

## 📞 Contato
- [Seu Email](mailto:eder.dev93@gmail.com)
- [LinkedIn](https://www.linkedin.com/in/ederaldo-souza-ribeiro-b518b773/)
