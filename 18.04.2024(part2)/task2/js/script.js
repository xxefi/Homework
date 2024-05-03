document.addEventListener("DOMContentLoaded", function() {
    const menuBar = document.querySelector('.menu-bar');
    const menuActive = document.querySelector('.menu-active');

    menuBar.addEventListener('mouseover', function() {
        menuBar.style.display = 'none';
        menuActive.style.display = 'flex';
    });

    menuActive.addEventListener('mouseleave', function() {
        menuActive.style.display = 'none';
        menuBar.style.display = 'flex';
    });
});