/* ============================================================
   KROZ PORTFOLIO — main.js
   ============================================================ */
(() => {
  "use strict";

  /* ---------- dados dos projetos ---------- */
  const projects = [
    {
      title: "Game Leaderboard",
      desc: "Placar de líder para competições multiplayer. Ranking ao vivo via WebSocket, conquistas e perfil de jogador com estatísticas.",
      tags: ["React", "Socket.io", "Redis", "TypeScript"],
      abbr: "GL",
      grad: "grad-5",
      live: "https://closed-ways-dollar-grants.trycloudflare.com",
      github: "https://github.com/devkroz/game-leaderboard",
    },
    {
      title: "Sistema de Agendamento",
      desc: "Agendamentos com painel do usuário e admin, login com JWT, upload de avatar e docs Swagger.",
      tags: ["React", "Fastify", "Prisma", "SQLite", "TailwindCSS"],
      abbr: "SA",
      grad: "grad-0",
      lives: ["https://agendamento-app-861.netlify.app"],
      github: "https://github.com/devkroz/agendamento",
    },
    {
      title: "Lobão Bot",
      desc: "Bot para Discord com economia, tickets, lembretes, moderação, giveaways, cargos e Mercado Pago. Mais de 6k linhas.",
      tags: ["Python", "discord.py", "MongoDB", "FastAPI"],
      abbr: "LB",
      grad: "grad-1",
      github: "https://github.com/Rede-Meia-Noite/Lobao",
    },
    {
      title: "E-Commerce API",
      desc: "API REST para e-commerce. JWT, catálogo, carrinho, checkout com baixa de estoque e gestão de pedidos.",
      tags: ["Node.js", "Express", "Prisma", "SQLite", "JWT"],
      abbr: "EC",
      grad: "grad-2",
      lives: ["https://mountains-geological-linked-consultation.trycloudflare.com/api/products"],
      github: "https://github.com/devkroz/ecommerce-api",
    },
    {
      title: "Analytics Dashboard",
      desc: "Painel de métricas em tempo real, gráficos, filtros e exportação em PDF. Projeto em andamento.",
      tags: ["Next.js", "Chart.js", "PostgreSQL", "Docker"],
      abbr: "AD",
      grad: "grad-3",
      github: "#",
    },
    {
      title: "Assistente IA",
      desc: "Chatbot com NLP, integração com APIs externas e canais web, WhatsApp e Discord. Projeto em andamento.",
      tags: ["Python", "FastAPI", "OpenAI", "WebSocket"],
      abbr: "AI",
      grad: "grad-4",
      github: "#",
    },
  ];

  /* ---------- ícones SVG de marcas ---------- */
  const BRANDS = {
    github: { fill: "#e4e4e7", svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.5-.3-5.2-1.3-5.2-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0C16.9 4 17.9 4.3 17.9 4.3c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.2 5.7.4.3.8 1 .8 2.1v3.1c0 .3.2.7.8.6a11.5 11.5 0 0 0 7.9-10.9C23.5 5.7 18.3.5 12 .5Z"/></svg>` },
    linkedin: { fill: "#0a66c2", svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2ZM8 19H5v-9h3v9ZM6.5 8.6A1.8 1.8 0 1 1 8.3 6.8a1.8 1.8 0 0 1-1.8 1.8ZM19 19h-3v-4.7c0-1.1 0-2.6-1.6-2.6s-1.8 1.2-1.8 2.5V19h-3v-9h2.9v1.2a3.2 3.2 0 0 1 2.8-1.6c3 0 3.6 2 3.6 4.6V19Z"/></svg>` },
    discord: { fill: "#5865F2", svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.32 4.37a19.8 19.8 0 0 0-4.89-1.52.07.07 0 0 0-.08.04c-.21.38-.44.87-.6 1.25a18.3 18.3 0 0 0-5.5 0 12.6 12.6 0 0 0-.61-1.25.08.08 0 0 0-.08-.04 19.7 19.7 0 0 0-4.88 1.52.07.07 0 0 0-.04.03C1.15 8.9.6 13.3.84 17.7a.08.08 0 0 0 .03.06 19.9 19.9 0 0 0 5.99 3.02.08.08 0 0 0 .08-.03c.46-.63.87-1.3 1.22-2a.08.08 0 0 0-.04-.11 13.2 13.2 0 0 1-1.86-.9.08.08 0 0 1-.01-.12c.13-.09.25-.19.37-.29a.07.07 0 0 1 .08-.03c3.9 1.78 8.12 1.78 11.96 0a.07.07 0 0 1 .08.03c.12.1.25.2.37.3a.08.08 0 0 1 0 .12c-.6.35-1.22.65-1.87.9a.08.08 0 0 0-.04.11c.36.7.77 1.37 1.22 2a.08.08 0 0 0 .08.03 19.8 19.8 0 0 0 3.02-2.02.08.08 0 0 0 .03-.06c.28-5-.87-9.3-3.7-13.25a.06.06 0 0 0-.03-.03ZM8.02 15.33c-1.18 0-2.16-1.09-2.16-2.42s.96-2.42 2.16-2.42c1.22 0 2.18 1.1 2.16 2.42 0 1.33-.96 2.42-2.16 2.42Zm7.96 0c-1.18 0-2.16-1.09-2.16-2.42s.96-2.42 2.16-2.42c1.22 0 2.18 1.1 2.16 2.42 0 1.33-.94 2.42-2.16 2.42Z"/></svg>` },
    whatsapp: { fill: "#25D366", svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.47 14.38c-.3-.15-1.76-.86-2.03-.96a.7.7 0 0 0-.26-.05c-.11 0-.25.05-.38.15-.72.8-1.33 1.34-1.36 1.38-.13.14-.27.17-.48.06-.58-.29-1.9-1.16-2.88-2.38-.21-.3-.13-.45-.02-.59l.45-.52a2 2 0 0 0 .2-.32c.08-.16.08-.3.04-.44-.04-.14-.35-1.94-.54-2.56-.12-.4-.29-.4-.6-.4H9.75c-.23 0-.6.08-.82.4-.22.3-1 .98-1 2.4 0 1.44 1.02 2.83 1.16 3.02.13.2 2.02 3.2 5.02 4.39 2 .82 2.5.66 2.96.62.43-.03 1.36-.55 1.55-1.08.2-.54.2-.99.14-1.08-.06-.08-.22-.16-.48-.31Z"/><path d="M12.04 2.04a9.92 9.92 0 0 1 10 22.15 3.6 3.6 0 0 0-2.93-.3 9.99 9.99 0 1 0-7.07 0 3.6 3.6 0 0 0-2.93.3 9.92 9.92 0 0 1 2.93-22.15Z"/></svg>` },
    email: { fill: "#EA4335", svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z"/></svg>` },
  };

  const contacts = [
    { label: "Email", value: "devkroz0@gmail.com", brand: "email", href: "mailto:devkroz0@gmail.com" },
    { label: "Discord", value: "kroz.py", brand: "discord", href: "https://discord.com/users/kroz.py" },
    { label: "WhatsApp", value: "+55 21 99045-5014", brand: "whatsapp", href: "https://wa.me/5521990455014" },
    { label: "GitHub", value: "/devkroz", brand: "github", href: "https://github.com/devkroz" },
    { label: "LinkedIn", value: "/in/charles-wagner", brand: "linkedin", href: "https://linkedin.com/in/charles-wagner-68549b424/" },
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
            <span class="pcard-art-emoji">${p.abbr}</span>
          </div>
          <div class="pcard-body">
            <h3>${p.title}</h3>
            <p>${p.desc}</p>
            <div class="pcard-tags">${p.tags.map((t) => `<span>${t}</span>`).join("")}</div>
            <div class="pcard-links">
              ${(p.lives || (p.live ? [p.live] : [])).map((l) => `<a href="${l}" target="_blank" rel="noopener">Ver ao vivo</a>`).join("")}
              ${p.github ? `<a href="${p.github}" target="_blank" rel="noopener">Codigo</a>` : ""}
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
      .map((c) => {
        const brand = BRANDS[c.brand];
        return `
        <a class="ccard reveal" href="${c.href}" target="_blank" rel="noopener" style="${brand.fill ? `--brand:${brand.fill}` : ""}">
          <div class="ccard-icon">${brand.svg}</div>
          <div class="ccard-body">
            <div class="ccard-label">${c.label}</div>
            <div class="ccard-value">${c.value}</div>
          </div>
        </a>`;
      })
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
    "deploy --prod",
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