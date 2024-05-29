
const mode = document.getElementById('mode_icon');
const body = document.getElementById('root');

function applyDarkMode() {
    mode.classList.remove('fa-moon');
    mode.classList.add('fa-sun');
    body.classList.add('dark');
}

function applyLightMode() {
    mode.classList.remove('fa-sun');
    mode.classList.add('fa-moon')
    body.classList.remove('dark');
}

if(localStorage.getItem('theme') === 'dark') {
    applyDarkMode();;
} else {
    applyLightMode()
}

mode.addEventListener('click', () => {
    if(mode.classList.contains('fa-moon')) {
        applyDarkMode();
        localStorage.setItem('theme', 'dark');
    } else {
        applyLightMode();
        localStorage.setItem('theme', 'light');
    }
}) ;