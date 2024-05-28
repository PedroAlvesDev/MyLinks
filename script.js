const mode = document.getElementById('mode_icon');

mode.addEventListener('click', () => {
    const body = document.getElementById('root');
    if(mode.classList.contains('fa-moon')) {
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');

        body.classList.add('dark');
        return;
    }

    mode.classList.add('fa-moon');
    mode.classList.remove('fa-sun');
    body.classList.remove('dark');
});