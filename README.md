<div align="center">

  <h1>💻 Kroz — Portfólio</h1>
  <p>
    <b>Site pessoal e portfólio de desenvolvedor Full Stack.</b><br />
    Dark, profissional, com arte 100% em SVG, animações e zero frameworks.
  </p>

  <a href="https://devkroz.github.io/portifolio/">
    <img src="https://img.shields.io/badge/Acessar%20o%20site-%23000?style=for-the-badge&logo=githubpages&logoColor=white" alt="ver site" />
  </a>
  <img src="https://img.shields.io/badge/license-MIT-e74c3c?style=for-the-badge" alt="licença" />
  <img src="https://img.shields.io/badge/feito%20com-HTML%2FCSS%2FJS-e74c3c?style=for-the-badge" alt="stack" />

</div>

---

## ✨ Visão geral

Meu site pessoal e portfólio, construído do zero **sem framework** — só HTML, CSS e JavaScript
vanilla. O foco está em **performance**, **animações suaves** e **identidade visual** própria.

| | |
|---|---|
| 🔌 **Zero dependências** | Nada para instalar, buildar ou manter |
| ⚡ **Leve e rápido** | Carrega instantâneo, sem bundle |
| 🎨 **Identidade própria** | Desenho anime feito em SVG, cores e dark theme |
| 🎬 **Animações** | Typing, parallax, scroll reveal, skills animadas |

## 🚀 Acessos

- **Site ao vivo**: https://devkroz.github.io/portifolio/
- **Repositório**: https://github.com/devkroz/portifolio

## 🗂️ Estrutura

```
.
├── .github/workflows/   # Deploy automático no GitHub Pages
├── src/                 # Código-fonte do site
│   ├── css/main.css     # Estilos, variáveis, tema, responsividade
│   ├── js/main.js       # Lógica: render, typing, reveal, menu
│   ├── index.html       # Estrutura da página
│   └── 404.html         # Route fallback
```

## 🛠️ Tecnologias

- **HTML5** — semântico e acessível
- **CSS3** — variáveis, grid, flexbox, animações (@keyframes), `backdrop-filter`
- **JavaScript (ES6+)** — renderização de projetos/contatos, Intersection Observer, efeito de digitação
- **GitHub Actions** — build + deploy contínuo no GitHub Pages

## 🧠 Como funciona o deploy

O workflow em `.github/workflows/deploy.yml` dispara a cada push na branch `master`:

1. **Checkout** do código
2. **Build**: copia `src/` para `_site/`
3. **Upload** do artefato
4. **Deploy** automático no GitHub Pages

Nenhuma configuração manual necessária na dashboard.

## 📄 Licença

Distribuído sob a licença **MIT**. Veja `LICENSE` para mais detalhes.

---

<div align="center">Feito do zero com 🧡 por <b>Kroz</b></div>