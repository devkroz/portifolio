/* ============================================================
   KROZ PORTFOLIO — main.js
   ============================================================ */
(() => {
  "use strict";

  /* ---------- dados dos projetos ---------- */
  const projects = [
    {
      title: "Game Leaderboard",
      desc: "Sistema de leaderboard para competições multiplayer com ranking em tempo real via WebSocket, achievements e perfil de jogador com estatísticas.",
      tags: ["React", "Socket.io", "Redis", "TypeScript"],
      emoji: "🎮",
      grad: "grad-5",
      live: "https://closed-ways-dollar-grants.trycloudflare.com",
      github: "https://github.com/devkroz/game-leaderboard",
    },
    {
      title: "Sistema de Agendamento",
      desc: "Plataforma completa de agendamentos com dashboard do usuário, painel admin, autenticação JWT, upload de avatar e documentação Swagger.",
      tags: ["React", "Fastify", "Prisma", "SQLite", "TailwindCSS"],
      emoji: "📅",
      grad: "grad-0",
      lives: ["https://agendamento-app-861.netlify.app"],
      github: "https://github.com/devkroz/agendamento",
    },
    {
      title: "Lobão Bot",
      desc: "Bot multifuncional para Discord com economia, tickets, lembretes, moderação, giveaways, sistema de cargos e integração com Mercado Pago. Mais de 6.2k linhas.",
      tags: ["Python", "discord.py", "MongoDB", "FastAPI"],
      emoji: "🐺",
      grad: "grad-1",
      github: "https://github.com/Rede-Meia-Noite/Lobao",
    },
    {
      title: "E-Commerce API",
      desc: "API RESTful completa para e-commerce com autenticação JWT, catálogo de produtos, carrinho de compras, checkout com validação de estoque e gestão de pedidos.",
      tags: ["Node.js", "Express", "Prisma", "SQLite", "JWT"],
      emoji: "🛒",
      grad: "grad-2",
      lives: ["https://mountains-geological-linked-consultation.trycloudflare.com/api/products"],
      github: "https://github.com/devkroz/ecommerce-api",
    },
    {
      title: "Analytics Dashboard",
      desc: "Dashboard interativo para visualização de métricas em tempo real com gráficos dinâmicos, filtros avançados e exportação de relatórios em PDF.",
      tags: ["Next.js", "Chart.js", "PostgreSQL", "Docker"],
      emoji: "📊",
      grad: "grad-3",
      github: "#",
    },
    {
      title: "Assistente IA",
      desc: "Chatbot inteligente com processamento de linguagem natural, integração com APIs externas e suporte a múltiplos canais (web, WhatsApp e Discord).",
      tags: ["Python", "FastAPI", "OpenAI", "WebSocket"],
      emoji: "🤖",
      grad: "grad-4",
      github: "#",
    },
  ];

  const contacts = [
    { label: "Email", value: "devkroz0@gmail.com", icon: "📧", href: "mailto:devkroz0@gmail.com" },
    { label: "Discord", value: "kroz.py", icon: "💬", href: "https://discord.com/users/kroz.py" },
    { label: "WhatsApp", value: "+55 21 99045-5014", icon: "📱", href: "https://wa.me/5521990455014" },
    { label: "GitHub", value: "/devkroz", icon: "🐙", href: "https://github.com/devkroz" },
    { label: "LinkedIn", value: "/in/charles-wagner", icon: "🔗", href: "https://linkedin.com/in/charles-wagner-68549b424/" },
  ];

  /* ---------- render projects ---------- */
  const pGrid = document.getElementById("projectsGrid");
  if (pGrid) {
    pGrid.innerHTML = projects
      .map(
        (p, i) => `
        <article class="pcard reveal" data-delay="${(i % 3) + 1}">
          <div class="pcard-art">
            <div class="pcard-art-grad ${p.grad}"></div>
            <span class="pcard-art-emoji">${p.emoji}</span>
          </div>
          <div class="pcard-body">
            <h3>${p.title}</h3>
            <p>${p.desc}</p>
            <div class="pcard-tags">${p.tags.map((t) => `<span>${t}</span>`).join("")}</div>
            <div class="pcard-links">
              ${(p.lives || (p.live ? [p.live] : [])).map((l) => `<a href="${l}" target="_blank" rel="noopener">🔗 Live</a>`).join("")}
              ${p.github ? `<a href="${p.github}" target="_blank" rel="noopener">🐙 GitHub</a>` : ""}
            </div>
          </div>
        </article>`
      )
      .join("");
  }

  /* ---------- render contacts ---------- */
  const cGrid = document.getElementById("contactGrid");
  if (cGrid) {
    cGrid.innerHTML = contacts
      .map(
        (c) => `
        <a class="ccard reveal" href="${c.href}" target="_blank" rel="noopener">
          <div class="ccard-icon">${c.icon}</div>
          <div class="ccard-body">
            <div class="ccard-label">${c.label}</div>
            <div class="ccard-value">${c.value}</div>
          </div>
        </a>`
      )
      .join("");
  }

  /* ---------- typed effect ---------- */
  const roles = [
    "full stack developer",
    "react developer",
    "node.js developer",
    "bot creator",
    "backend engineer",
  ];
  const typedEl = document.getElementById("typed");
  if (typedEl) {
    let ri = 0, ci = 0, deleting = false;
    (function type() {
      const word = roles[ri];
      typedEl.textContent = word.slice(0, ci);
      let delay = deleting ? 40 : 70;
      if (!deleting && ci === word.length) { delay = 1600; deleting = true; }
      else if (deleting && ci === 0) { deleting = false; ri = (ri + 1) % roles.length; delay = 400; }
      ci += deleting ? -1 : 1;
      setTimeout(type, delay);
    })();
  }

  /* ---------- scroll reveal ---------- */
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          // run skill bars when skills section visible
          e.target.querySelectorAll?.(".fill").forEach(animateBar);
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  function animateBar(fill) { const w = fill.dataset.w || 0; setTimeout(() => { fill.style.width = w + "%"; }, 150); }
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

  // skills container to trigger bars
  const skillsEl = document.querySelector(".skills");
  if (skillsEl) io.observe(skillsEl);

  /* ---------- navbar scrolled ---------- */
  const nav = document.getElementById("nav");
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 20);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- active nav link ---------- */
  const sections = [...document.querySelectorAll("section[id],header[id]")];
  const navLinks = [...document.querySelectorAll(".nav-link")];
  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          navLinks.forEach((l) => l.classList.remove("active"));
          const link = navLinks.find((l) => l.getAttribute("href") === "#" + e.target.id);
          if (link) link.classList.add("active");
        }
      });
    },
    { threshold: 0.4 }
  );
  sections.forEach((s) => spy.observe(s));

  /* ---------- mobile menu ---------- */
  const burger = document.getElementById("burger");
  const links = document.querySelector(".nav-links");
  if (burger) {
    burger.addEventListener("click", () => {
      burger.classList.toggle("open");
      links.classList.toggle("open");
    });
    navLinks.forEach((l) => l.addEventListener("click", () => {
      burger.classList.remove("open");
      links.classList.remove("open");
    }));
  }

  /* ---------- cursor glow (desktop) ---------- */
  const glow = document.querySelector(".cursor-glow");
  if (glow && window.matchMedia("(hover:hover)").matches) {
    document.addEventListener("mousemove", (e) => {
      glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%,-50%)`;
      glow.style.opacity = 1;
    });
    document.addEventListener("mouseleave", () => (glow.style.opacity = 0));
  }

  /* ---------- parallax on hero art ---------- */
  const pax = document.querySelector(".parallax");
  if (pax && window.matchMedia("(hover:hover)").matches) {
    const speed = parseFloat(pax.dataset.speed || 0.15);
    document.addEventListener("mousemove", (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2 * 12 * speed;
      const y = (e.clientY / window.innerHeight - 0.5) * 2 * 12 * speed;
      pax.style.transform = `translate(${x}px, ${y}px)` ;
    });
  }

  /* ---------- floating terminal ---------- */
  const term = document.getElementById("term");
  const lines = [
    "npm run dev -- --port 3000",
    "deploy --prod ✅",
    "git push origin main",
    "pip install -r req.txt",
    "docker compose up -d",
    "const kroz = 'online'",
  ];
  let li = 0, tc = 0, tDeleting = false;
  (function typeTerm() {
    const termLine = document.getElementById("termLine");
    if (!termLine) return;
    const full = lines[li];
    termLine.textContent = full.slice(0, tc);
    let d = tDeleting ? 30 : 55;
    if (!tDeleting && tc === full.length) { d = 2200; tDeleting = true; }
    else if (tDeleting && tc === 0) { tDeleting = false; li = (li + 1) % lines.length; d = 300; }
    tc += tDeleting ? -1 : 1;
    setTimeout(typeTerm, d);
  })();
  if (term) {
    let show = false;
    // reveal after a few seconds
    const showTimer = setTimeout(() => { term.classList.add("show"); }, 2600);
    // hide with a click anywhere after shown
    setTimeout(() => {
      window.addEventListener("click", () => { term.classList.remove("show"); clearTimeout(showTimer); }, { once: true });
    }, 7000);
  }

  /* ---------- back to top ---------- */
  const backTop = document.querySelector(".back-top");
  if (backTop) {
    backTop.addEventListener("click", (e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); });
    backTop.setAttribute("href", "#");
  }
})();