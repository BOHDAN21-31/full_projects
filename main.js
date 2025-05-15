document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.querySelector(".dropdown-toggle");
    const dropdownMenu = document.querySelector(".dropdown-menu");

    toggleBtn.addEventListener("click", () => {
        toggleBtn.classList.toggle("open");
        dropdownMenu.classList.toggle("visible");
    });

    // Закриття меню при кліку поза межами
    document.addEventListener("click", function (e) {
        if (!toggleBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
            toggleBtn.classList.remove("open");
            dropdownMenu.classList.remove("visible");
        }
    });
});

function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('open');
}
const phrases = [
    'Допомагаємо 🇺🇦 Консультуємо 🇺🇦 Розвиваємо 🇺🇦 Інтегруємо 🇺🇦'
];

let index = 0;
setInterval(() => {
    const marquee = document.querySelector('.marquee span');
    index = (index + 1) % phrases.length;
    marquee.textContent = phrases[index];
}, 15000);
