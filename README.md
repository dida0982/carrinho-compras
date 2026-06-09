# 🛒 Carrinho de Compras

Aplicação web interativa de carrinho de compras, desenvolvida com HTML5, CSS3 e JavaScript puro (Vanilla JS). Permite selecionar produtos, definir quantidades, visualizar itens no carrinho e acompanhar o total em tempo real.

---

## 📸 Demonstração

> _Deploy disponível em:_ `[adicione o link aqui após publicar no GitHub Pages]`

---

## ✨ Funcionalidades

- ✅ Seleção de produtos a partir de um menu dropdown estilizado
- ✅ Inserção de quantidade com validação de entrada
- ✅ Adição de produtos ao carrinho com feedback visual animado
- ✅ Cálculo automático do subtotal por item e total geral
- ✅ Formatação de valores em moeda brasileira (R$ BRL)
- ✅ Limpeza completa do carrinho com um clique
- ✅ Mensagens de feedback acessíveis (`aria-live`)
- ✅ Layout responsivo para desktop, notebook, tablet e smartphone

---

## 🚀 Tecnologias Utilizadas

| Tecnologia | Versão / Recurso |
|------------|-----------------|
| HTML5 | Semântico, acessível (ARIA) |
| CSS3 | Custom Properties, Flexbox, Grid, `clamp()`, Media Queries |
| JavaScript | ES6+ (Modules pattern, Arrow functions, Template literals, `toLocaleString`) |
| Google Fonts | Chakra Petch (título) + Inter (corpo) |

---

## 📁 Estrutura do Projeto

```
carrinho-compras/
├── index.html          # Estrutura semântica da página
├── css/
│   └── style.css       # Estilos, variáveis e responsividade
├── js/
│   └── app.js          # Lógica da aplicação
├── assets/
│   ├── oculos.png          # Imagem decorativa
│   ├── arrow-down.svg      # Ícone do select
│   ├── carrinho-cinza.svg  # Imagem de fundo do carrinho
│   ├── grafismo-azul.svg   # Decoração superior
│   └── icone-carrinho.svg  # Ícone do título do carrinho
└── README.md
```

---

## ▶️ Como Executar o Projeto

### Pré-requisitos

Apenas um navegador moderno. Não há dependências externas ou build necessário.

### Passos

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/carrinho-compras.git

# 2. Acesse a pasta do projeto
cd carrinho-compras

# 3. Abra o arquivo no navegador
# Opção A: abrir diretamente o index.html
# Opção B: usar uma extensão como Live Server (VS Code) para servidor local
```

> 💡 **Dica:** Para a melhor experiência de desenvolvimento, utilize a extensão [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) no VS Code.

---

## 📚 Aprendizados

Durante o desenvolvimento deste projeto, foram aplicados e consolidados os seguintes conceitos:

- **Manipulação do DOM** com JavaScript puro — criação e inserção dinâmica de elementos
- **Eventos de formulário** — uso de `submit` com `preventDefault()` para controle total
- **Validação de inputs** — verificação de valores antes de processar os dados
- **Formatação de dados** — uso de `toLocaleString()` para moeda no padrão BRL
- **Variáveis CSS** (Custom Properties) — design tokens para manutenção consistente
- **Acessibilidade (A11Y)** — atributos ARIA, `aria-live`, `aria-label`, `role`
- **Responsividade** — layout adaptativo com Grid, Flexbox e Media Queries
- **Clean Code** — funções com responsabilidade única (SRP), nomenclatura clara, sem duplicações

---

## 🔮 Melhorias Futuras

- [ ] Remover itens individualmente do carrinho
- [ ] Persistência de dados com `localStorage`
- [ ] Aplicar desconto por cupom
- [ ] Animação de remoção de itens
- [ ] Contador de itens no ícone do carrinho
- [ ] Suporte a tema escuro (Dark Mode)
- [ ] Exportar pedido como PDF ou compartilhar por link

---

**Instrutores:**

**Jacqueline Oliveira**

<img src="https://github.com/jacqueline-oliveira.png" width="150" alt="Foto de perfil">

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/jacqueline-oliveira)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/jacqueline-r-oliveira/)

**Rodrigo da Silva Ferreira Caneppele**

<img src="https://github.com/rcaneppele.png" width="150" alt="Foto de perfil">

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/rcaneppele/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/rcaneppele)

---

## 👤 Autor

**Guilherme Barros**

<img src="https://github.com/dida0982.png" width="150" alt="Foto de perfil">

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/guilherme-barros-6a0369209/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/dida0982)

---

> Projeto desenvolvido durante o curso de **JavaScript** na plataforma [Alura](https://www.alura.com.br). 🚀
