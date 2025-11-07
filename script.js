// Theme Management
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Check for saved theme preference or default to system preference
function getPreferredTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        return savedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

// Set theme
function setTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

// Initialize theme
setTheme(getPreferredTheme());

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
});

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    // Only auto-switch if user hasn't manually set a preference
    if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'dark' : 'light');
    }
});

// Smooth scroll behavior for any internal links (if added later)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add animation delay to sections for staggered fade-in effect
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    sections.forEach((section, index) => {
        section.style.animationDelay = `${index * 0.1}s`;
    });

    // Console easter egg
    console.log('%c$ whoami', 'font-family: monospace; font-size: 14px; font-weight: bold;');
    console.log('%cryuux05', 'font-family: monospace; font-size: 16px;');
    console.log('%c// Thanks for checking the console! 👨‍💻', 'font-family: monospace; font-size: 12px; color: #666;');
});

// Add keyboard navigation hint
document.addEventListener('keydown', (e) => {
    // Konami code easter egg: up, up, down, down, left, right, left, right, b, a
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;

    if (!window.konamiIndex) window.konamiIndex = 0;

    if (e.key === konamiCode[window.konamiIndex]) {
        window.konamiIndex++;
        if (window.konamiIndex === konamiCode.length) {
            document.body.style.animation = 'rainbow 2s linear infinite';
            setTimeout(() => {
                document.body.style.animation = '';
                window.konamiIndex = 0;
            }, 3000);
        }
    } else {
        window.konamiIndex = 0;
    }
});

// Add hover effect sound (optional - commented out by default)
// Uncomment if you want to add subtle interaction feedback
/*
const hoverSound = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBWu/8OKMNgkXabrx35pPDAxPqu/3QBgSZprvzYckHmg==');
document.querySelectorAll('.contact-link').forEach(link => {
    link.addEventListener('mouseenter', () => {
        // hoverSound.play();
    });
});
*/

