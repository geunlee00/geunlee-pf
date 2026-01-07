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

    if (btn) btn.addEventListener('click', checkPassword);

    if (input) {
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') checkPassword();
        });
    }

    // Carousel Logic
    const slides = document.querySelectorAll('.carousel-slide img');
    const dots = document.querySelectorAll('.carousel-dots .dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentSlide = 0;

    if (slides.length > 0) {
        function showSlide(index) {
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));

            // Loop functionality
            if (index >= slides.length) currentSlide = 0;
            else if (index < 0) currentSlide = slides.length - 1;
            else currentSlide = index;

            slides[currentSlide].classList.add('active');
            dots[currentSlide].classList.add('active');
        }

        if (nextBtn) nextBtn.addEventListener('click', () => showSlide(currentSlide + 1));
        if (prevBtn) prevBtn.addEventListener('click', () => showSlide(currentSlide - 1));

        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                showSlide(parseInt(dot.dataset.index));
            });
        });

        // Auto play (optional)
        // setInterval(() => showSlide(currentSlide + 1), 5000);
    }
});
