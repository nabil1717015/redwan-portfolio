// Typing effect
const text = "Urban Planner";
let index = 0;
const typedText = document.getElementById('typed-text');
const cursor = document.getElementById('cursor');

function type() {
    if (index < text.length) {
        typedText.textContent += text.charAt(index);
        index++;
        setTimeout(type, 150);
    } else {
        cursor.style.display = 'none';
    }
}
type();

// Theme toggle
const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('click', () => {
    const html = document.documentElement;
    if (html.getAttribute('data-theme') === 'light') {
        html.setAttribute('data-theme', 'dark');
        document.querySelector('.hero').classList.add('dark');
    } else {
        html.setAttribute('data-theme', 'light');
        document.querySelector('.hero').classList.remove('dark');
    }
});