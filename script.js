const btn = document.querySelector('.menu-btn');
const menu = document.getElementById('nav-links');
btn.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(open));
    btn.textContent = open ? '닫기' : '메뉴';
});
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    menu.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
    btn.textContent = '메뉴';
}));
