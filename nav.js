// shared nav injected by each page
document.addEventListener('DOMContentLoaded', () => {
  const slot = document.getElementById('nav-slot');
  if (slot) slot.innerHTML = renderNav(slot.dataset.page || '');
});

function renderNav(activePage) {
  const pages = [
    { label: 'home', href: 'index.html' },
    { label: 'artificial agents click here', href: 'bots.html' },
    { label: 'about me', href: 'about.html' },
    { label: 'math gym', href: 'mathgym.html' },
  ];

  const navLinks = pages.map(p =>
    `<a href="${p.href}"${activePage === p.label ? ' class="active"' : ''}>${p.label}</a>`
  ).join('\n    ');

  return `
  <header>
    <div class="name-role-row">
      <div>
        <div class="site-name">ankita</div>
        <div class="site-role">ML Engineer • Former Chess Athlete</div>
      </div>
      <div class="social-icons">
        <a href="https://github.com/0xafraidoftime" target="_blank" rel="noopener" data-tip="github">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.338 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .267.18.578.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"/>
          </svg>
        </a>
        <a href="https://x.com/afraidoftime_" target="_blank" rel="noopener" data-tip="twitter">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L2.018 2.25H8.08l4.258 5.63 5.906-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </a>
        <a href="https://allmylinks.com/afraidoftime" target="_blank" rel="noopener" data-tip="all links">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
          </svg>
        </a>
      </div>
    </div>
  </header>
  <nav>
    ${navLinks}
  </nav>`;
}
