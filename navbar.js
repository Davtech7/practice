const menuIcon = document.getElementById('menu-icon');
const navLink = document.getElementById('navlink');

menuIcon.addEventListener('click', () => {
navLink.classList.toggle('active');
});
