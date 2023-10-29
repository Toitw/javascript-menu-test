// Wrap the code in an event listener for DOMContentLoaded
document.addEventListener("DOMContentLoaded", function() {
    // Get the menu button and the submenu
    const menuButton = document.getElementById("menuButton");
    const submenu = document.getElementById("submenu");

    // Check if the elements exist before adding an event listener
    if (menuButton && submenu) {
        // Toggle the display of the submenu
        menuButton.addEventListener("click", function() {
            submenu.classList.toggle("show");
        });
    }
});
