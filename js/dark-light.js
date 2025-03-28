document.addEventListener('DOMContentLoaded', function() {
    const trilho = document.getElementById('trilho');
    const body = document.querySelector('body');
    const container = document.querySelector('.container');
    const inputboxes = document.querySelectorAll('.inputbox');
    const rememberme = document.querySelector('.rememberme');
    const register = document.querySelector('.register');

    trilho.addEventListener('click', () => {
        // Alternar classes dark nos elementos
        trilho.classList.toggle('dark');
        body.classList.toggle('dark');
        container.classList.toggle('dark');
        
        inputboxes.forEach(inputbox => {
            inputbox.classList.toggle('dark');
        });
        
        rememberme.classList.toggle('dark');
        register.classList.toggle('dark');
    });
});