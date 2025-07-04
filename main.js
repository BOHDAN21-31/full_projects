
const phrases = [
    'Допомагаємо 🇺🇦 Консультуємо 🇺🇦 Розвиваємо 🇺🇦 Інтегруємо 🇺🇦'
];

let index = 0;
setInterval(() => {
    const marquee = document.querySelector('.marquee span');
    index = (index + 1) % phrases.length;
    marquee.textContent = phrases[index];
}, 15000);

