// 1. Funcionalidade do Botão Curtir
let count = 0;
const likeBtn = document.getElementById('likeBtn');
const likeCount = document.getElementById('likeCount');

likeBtn.addEventListener('click', () => {
    count++;
    likeCount.textContent = count;
});

// 2. Funcionalidade do Modo Escuro / Claro
const themeToggleBtn = document.getElementById('themeToggle');

// Função centralizada para alternar o tema
function toggleTheme() {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        themeToggleBtn.textContent = '☀️ Modo Claro';
    } else {
        themeToggleBtn.textContent = '🌙 Modo Escuro';
    }
}

// Clique no botão
themeToggleBtn.addEventListener('click', toggleTheme);

// Atalho na tecla "A"
document.addEventListener('keydown', (event) => {
    // Funciona com 'a' minúsculo ou 'A' maiúsculo
    if (event.key === 'a' || event.key === 'A') {
        toggleTheme();
    }
});