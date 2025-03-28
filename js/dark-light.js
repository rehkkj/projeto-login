document.addEventListener('DOMContentLoaded', function() {
    const trilho = document.getElementById('trilho');
    const body = document.querySelector('body');
    const container = document.querySelector('.container');
    const inputboxes = document.querySelectorAll('.inputbox');
    const rememberme = document.querySelector('.rememberme');
    const register = document.querySelector('.register');

    trilho.addEventListener('click', () => {
        trilho.classList.toggle('dark');
        body.classList.toggle('dark');
        container.classList.toggle('dark');
        
        inputboxes.forEach(inputbox => {
            inputbox.classList.toggle('dark');
        });
        
        rememberme.classList.toggle('dark');
        register.classList.toggle('dark');
        
        const isDark = body.classList.contains('dark');
        localStorage.setItem('darkMode', isDark);
    });

    const darkMode = localStorage.getItem('darkMode') === 'true';
    if (darkMode) {
        trilho.classList.add('dark');
        body.classList.add('dark');
        container.classList.add('dark');
        inputboxes.forEach(inputbox => inputbox.classList.add('dark'));
        rememberme.classList.add('dark');
        register.classList.add('dark');
    }
});