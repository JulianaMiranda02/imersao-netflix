document.addEventListener('DOMContentLoaded', () => {
    const profileLinks = document.querySelectorAll('.perfil');

    profileLinks.forEach(link => {
        link.addEventListener('click', () => {
            const img = link.querySelector('img');
            const nameEl = link.querySelector('.nome-perfil');

            if (img && nameEl) {
                localStorage.setItem('perfilAtivoNome', nameEl.textContent.trim());
                localStorage.setItem('perfilAtivoImagem', img.src);
            }
        });
    });
});
