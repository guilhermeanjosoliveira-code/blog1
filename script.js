// Seleciona os elementos do HTML
const likeBtn = document.getElementById('likeBtn');
const likeCount = document.getElementById('likeCount');

let count = 0;
let liked = false;

// Adiciona o evento de clique
likeBtn.addEventListener('click', () => {
    if (!liked) {
        count++;
        likeCount.textContent = count;
        likeBtn.style.backgroundColor = '#27ae60'; // Muda para verde ao curtir
        liked = true;
    } else {
        count--;
        likeCount.textContent = count;
        likeBtn.style.backgroundColor = '#e74c3c'; // Volta para vermelho ao descurtir
        liked = false;
    }
});