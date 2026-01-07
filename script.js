document.addEventListener('DOMContentLoaded', () => {
    // Mouse Glow Layout
    const glow = document.querySelector('.cursor-glow');
    document.addEventListener('mousemove', (e) => {
        glow.style.left = e.clientX + 'px';
        glow.style.top = e.clientY + 'px';
    });

    console.log("Portfolio loaded!");
});
