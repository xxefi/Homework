document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger-menu');
    const navItems = document.querySelector('.nav-items');

    burgerMenu.addEventListener('click', function() {
        navItems.classList.toggle('active');
    });
});