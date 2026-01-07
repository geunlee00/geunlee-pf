document.addEventListener('DOMContentLoaded', () => {
    // Mouse Glow Layout
    const glow = document.querySelector('.cursor-glow');
    document.addEventListener('mousemove', (e) => {
        glow.style.left = e.clientX + 'px';
        glow.style.top = e.clientY + 'px';
    });

    console.log("Portfolio loaded!");

    // Password Protection
    const overlay = document.getElementById('login-overlay');
    const input = document.getElementById('password-input');
    const btn = document.getElementById('login-btn');
    const msg = document.getElementById('login-msg');

    // Set your password here
    const PASSWORD = "123";

    function checkPassword() {
        if (input.value === PASSWORD) {
            overlay.classList.add('hidden');
            // Optional: Save session to avoid logging in again on reload
            // sessionStorage.setItem('isLoggedIn', 'true');
        } else {
            msg.textContent = "비밀번호가 올바르지 않습니다.";
            input.value = "";
            input.classList.add('shake');
            setTimeout(() => input.classList.remove('shake'), 500);
        }
    }

    btn.addEventListener('click', checkPassword);

    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') checkPassword();
    });
});
