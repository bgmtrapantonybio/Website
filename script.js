/* Sticky Navbar */

const header = document.querySelector("header");

window.addEventListener("scroll",function() {
    header.classList.toggle("sticky",window.scrollY > 70);
});

/* Menu Icon */
const menuIcon = document.getElementById('menu-icon');
    const navbar = document.getElementById('navbar');

    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });

  