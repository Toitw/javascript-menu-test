document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.getElementById('menuButton');
    const submenu = document.getElementById('submenu');
    const submenuButtons = document.querySelectorAll('.submenu-button');

    menuButton.addEventListener('click', function() {
        submenu.classList.toggle('show');
        submenuButtons.forEach((button) => {
            button.classList.toggle('show');
        });

        if (submenu.classList.contains('show')) {
            submenuButtons.forEach((button, index) => {
                setTimeout(() => {
                    button.style.top = `${index * 50}px`; // Adjust vertical position
                }, index * 100); // Adjust animation delay
            });
        } else {
            submenuButtons.forEach((button) => {
                button.style.top = '0';
            });
        }
    });
});
