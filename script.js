const logonav = document.getElementById('logonav');
const navbar = document.getElementById('navbar');

logonav.addEventListener('click', () => {
    navbar.classList.toggle('active'); // Toggle class "active" to show/hide navbar
    logonav.classList.toggle('active'); // Memindahkan ikon hamburger setelah diklik
});
