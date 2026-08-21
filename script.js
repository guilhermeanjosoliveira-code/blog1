// 1. Curtir
let count = 0;
const likeBtn = document.getElementById('likeBtn');
const likeCount = document.getElementById('likeCount');

if (likeBtn && likeCount) {
    likeBtn.addEventListener('click', () => {
        count++;
        likeCount.textContent = count;
    });
}

// 2. Modo Escuro / Claro
const themeToggleBtn = document.getElementById('themeToggle');

function toggleTheme() {
    // Alterna a classe 'light-mode' no <body>
    document.body.classList.toggle('light-mode');

    // Se estiver com light-mode, ajusta o texto do botão
    if (document.body.classList.contains('light-mode')) {
        themeToggleBtn.textContent = '🌙 Modo Escuro';
    } else {
        themeToggleBtn.textContent = '☀️ Modo Claro';
    }
}

if (themeToggleBtn) {
    // Evento de Clique
    themeToggleBtn.addEventListener('click', toggleTheme);

    // Evento de Tecla "A"
    document.addEventListener('keydown', (event) => {
        // Evita ativar ao digitar em um campo de texto caso adicione um no futuro
        if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') return;
        
        if (event.key === 'a' || event.key === 'A') {
            toggleTheme();
        }
    });
}