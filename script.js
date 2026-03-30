// Script para alternar entre modo escuro e claro
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // Verificar se há preferência salva no localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        themeToggleBtn.textContent = '☀️';
    } else {
        themeToggleBtn.textContent = '🌙';
    }

    // Função para alternar tema
    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        const isLightMode = body.classList.contains('light-mode');
        themeToggleBtn.textContent = isLightMode ? '☀️' : '🌙';
        localStorage.setItem('theme', isLightMode ? 'light' : 'dark');
    });
});