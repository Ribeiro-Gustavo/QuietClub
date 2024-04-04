document.addEventListener('DOMContentLoaded', function() {
    // Selecionar todos os ícones de like
    const likeIcons = document.querySelectorAll('.like-icon');
    // Variável para armazenar os posts que receberam likes
    const likedPosts = new Set();

    // Adicionar um evento de clique a cada ícone de like
    likeIcons.forEach(likeIcon => {
        likeIcon.addEventListener('click', function() {
            // Verificar se o post já foi curtido
            const postId = likeIcon.dataset.likeCount;
            if (likedPosts.has(postId)) {
                // Remover o like se já foi curtido
                likedPosts.delete(postId);
                // Remover a classe "liked" do ícone de like
                likeIcon.classList.remove('liked');
                // Atualizar o ícone para ri-heart-line
                likeIcon.classList.replace('ri-heart-fill', 'ri-heart-line');
                // Atualizar o ícone para ri-heart-line
                likeIcon.classList.replace('ri-arrow-up-circle-fill', 'ri-arrow-up-circle-line');
                // Atualizar a cor do ícone para a cor padrão
                likeIcon.style.color = '';
                // Diminuir o contador de likes em 1
                const likeCountElement = likeIcon.nextElementSibling;
                let likeCount = parseInt(likeCountElement.textContent.replace(/[^\d]/g, '')); // Extrair apenas números do texto
                likeCount--;
                likeCountElement.textContent = likeCount.toLocaleString();
            } else {
                // Adicionar o post à lista de posts curtidos
                likedPosts.add(postId);
                // Adicionar a classe "liked" ao ícone de like
                likeIcon.classList.add('liked');
                // Atualizar o ícone para ri-heart-fill
                likeIcon.classList.replace('ri-heart-line', 'ri-heart-fill');
                // Atualizar o ícone para ri-arrow-up-circle-fill
                likeIcon.classList.replace('ri-arrow-up-circle-line', 'ri-arrow-up-circle-fill');
                // Definir a cor do ícone para a cor desejada
                likeIcon.style.color = '#e2336b';
                // Aumentar o contador de likes em 1
                const likeCountElement = likeIcon.nextElementSibling;
                let likeCount = parseInt(likeCountElement.textContent.replace(/[^\d]/g, '')); // Extrair apenas números do texto
                likeCount++;
                likeCountElement.textContent = likeCount.toLocaleString();
            }
        });
    });
});