# Portfólio Profissional - Leandro Barreto

![Angular](https://img.shields.io/badge/Angular-19.2.0-DD0031?style=flat-square&logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7.2-3178C6?style=flat-square&logo=typescript)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.6-7952B3?style=flat-square&logo=bootstrap)

Um site de portfólio profissional moderno e responsivo desenvolvido com Angular 19, apresentando minhas habilidades, experiências e projetos como desenvolvedor de software.

## 📋 Visão Geral

Este projeto é meu portfólio pessoal, criado para demonstrar minhas habilidades técnicas e apresentar meu trabalho para potenciais empregadores e clientes. O site foi desenvolvido com Angular 19, utilizando componentes standalone, lazy loading e seguindo as melhores práticas de desenvolvimento frontend.

## ✨ Funcionalidades

- **Design Responsivo**: Adaptação perfeita para dispositivos móveis, tablets e desktops
- **Tema Claro/Escuro**: Alternância automática baseada nas preferências do sistema
- **Animações Suaves**: Efeitos de transição e animações para melhor experiência do usuário
- **Painel Administrativo**: Área protegida para edição de conteúdo
- **Seções Organizadas**: Home, Sobre Mim, Experiência, Projetos, Habilidades, Blog e Contato

# 🖼️ Imagens do Meu Site

## 🔐 Tela de Login
![Tela de Login](src/assets/images/TelaLogin.png)

## 📝 Tela de Cadastro
![Tela de Cadastro](src/assets/images/TelaCadastro.png)

## 🏠 Tela Inicial
![Tela Inicial](src/assets/images/TelaInicial.png)

## ⚙️ Painel Administrativo
![Painel Administrativo](src/assets/images/PainelAdministrativo.png)
## 🛠️ Tecnologias Utilizadas

- **Angular 19**: Framework frontend para construção da interface
- **TypeScript**: Linguagem de programação tipada
- **Bootstrap 5**: Framework CSS para design responsivo
- **SCSS**: Pré-processador CSS para estilos avançados
- **Font Awesome**: Biblioteca de ícones
- **AOS**: Biblioteca para animações de scroll
- **LocalStorage**: Para persistência de dados do painel administrativo

## 🚀 Instalação e Execução

### Pré-requisitos

- Node.js (versão 18.x ou superior)
- NPM (versão 8.x ou superior)
- Angular CLI (versão 19.x)

### Passos para Instalação

1. Clone o repositório:
```bash
git clone https://github.com/LeandroBryto/personal-website.git
cd personal-website
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto localmente:
```bash
npm start
```

4. Acesse o site em `http://localhost:4200`

## 🔐 Acesso ao Painel Administrativo

Para acessar o painel administrativo e editar o conteúdo do site:

1. Navegue para `http://localhost:4200/admin/login`
2. Use as credenciais:
   - Usuário: `leandrobarrero`
   - Senha: `nokia123`

## 📁 Estrutura do Projeto

```
leandro-portfolio-site/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── about/          # Seção Sobre Mim
│   │   │   ├── admin/          # Painel Administrativo
│   │   │   ├── blog/           # Seção Blog
│   │   │   ├── contact/        # Seção Contato
│   │   │   ├── experience/     # Seção Experiência
│   │   │   ├── header/         # Cabeçalho do site
│   │   │   ├── home/           # Página Inicial
│   │   │   ├── projects/       # Seção Projetos
│   │   │   └── skills/         # Seção Habilidades
│   │   ├── app.component.ts    # Componente principal
│   │   ├── app.routes.ts       # Configuração de rotas
│   │   └── app.config.ts       # Configuração do Angular
│   ├── assets/                 # Imagens e recursos estáticos
│   └── styles.scss             # Estilos globais
└── angular.json                # Configuração do Angular CLI
```

## 🔧 Personalização

### Alterando Informações Pessoais

Você pode editar suas informações pessoais de duas formas:

1. **Através do Painel Administrativo**:
   - Acesse `http://localhost:4200/admin/login`
   - Navegue pelas abas para editar diferentes seções

2. **Editando os Arquivos Diretamente**:
   - Edite os arquivos HTML nas pastas dos componentes
   - Por exemplo, para alterar informações de contato, edite `src/app/components/contact/contact.component.html`

### Alterando Estilos

Para personalizar a aparência do site:

1. Cores e variáveis globais: edite `src/styles.scss`
2. Estilos específicos de componentes: edite os arquivos `.scss` em cada pasta de componente

## 📦 Build e Publicação

Para gerar uma versão otimizada para produção:

```bash
npm run build
```

Os arquivos serão gerados na pasta `dist/`.



## 🧪 Desenvolvimento e Testes

Durante o desenvolvimento deste projeto, enfrentei alguns desafios interessantes:

1. Implementação do efeito de digitação na página inicial usando JavaScript puro
2. Criação de um sistema de autenticação simples para o painel administrativo
3. Otimização de performance para carregamento rápido em dispositivos móveis

Estes desafios me permitiram aprofundar meus conhecimentos em Angular e JavaScript, além de melhorar minhas habilidades de resolução de problemas.

## 📝 Notas de Desenvolvimento

Durante o desenvolvimento, mantive um foco especial em:

- **Performance**: Lazy loading para carregamento rápido
- **Acessibilidade**: Seguindo diretrizes WCAG para melhor inclusão
- **SEO**: Implementação de meta tags e estrutura semântica
- **Código Limpo**: Seguindo princípios SOLID e boas práticas

## 📄 Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE para detalhes.

## 📞 Contato

Leandro Barreto - [leandrobarreto.barreto@gmail.com](mailto:leandrobarreto.barreto123@gmail.com)


