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

function toggleTheme() {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        themeToggleBtn.textContent = '🌙 Modo Escuro';
    } else {
        themeToggleBtn.textContent = '☀️ Modo Claro';
    }
}

// Alternar via clique no botão
themeToggleBtn.addEventListener('click', toggleTheme);

// Alternar pressionando a tecla "A"
document.addEventListener('keydown', (event) => {
    if (event.key === 'a' || event.key === 'A') {
        toggleTheme();
    }
});