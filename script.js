document.addEventListener('DOMContentLoaded', () => {
    // Mouse Glow (pointer devices only)
    const glow = document.querySelector('.cursor-glow');
    if (glow && window.matchMedia('(hover: hover)').matches) {
        document.addEventListener('mousemove', (e) => {
            glow.style.left = e.clientX + 'px';
            glow.style.top = e.clientY + 'px';
        });
    }

    // Mobile Menu
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.getElementById('nav-links');

    function setMenu(open) {
        navMenu.classList.toggle('open', open);
        menuToggle.setAttribute('aria-expanded', String(open));
        menuToggle.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
        menuToggle.innerHTML = open ? '<i class="fas fa-xmark"></i>' : '<i class="fas fa-bars"></i>';
    }

    menuToggle.addEventListener('click', () => {
        setMenu(!navMenu.classList.contains('open'));
    });

    // Close the menu after choosing a section
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => setMenu(false));
    });

    // Image Modal Logic
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-img');
    const captionText = document.getElementById('caption');
    const closeBtn = document.querySelector('.close-modal');

    document.querySelectorAll('img[data-zoom]').forEach(img => {
        img.addEventListener('click', function () {
            modal.style.display = 'block';
            // Add a slight delay to trigger the transition
            setTimeout(() => modal.classList.add('show'), 10);
            modalImg.src = this.src;
            modalImg.alt = this.alt;
            const figcaption = this.closest('figure')?.querySelector('figcaption');
            captionText.textContent = figcaption ? figcaption.textContent : this.alt;

            // Disable scroll
            document.body.style.overflow = 'hidden';
            closeBtn.focus();
        });
    });

    function closeModal() {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }, 300); // Wait for transition
    }

    closeBtn.addEventListener('click', closeModal);

    // Close on outside click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key !== 'Escape') return;
        if (modal.style.display === 'block') {
            closeModal();
        } else if (navMenu.classList.contains('open')) {
            setMenu(false);
        }
    });

    // Scroll Spy (Active Navigation)
    const sections = document.querySelectorAll('main section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const id = entry.target.getAttribute('id');
            navLinks.forEach(link => {
                link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
            });
        });
    }, {
        // Treat the band just below the navbar as "current"
        rootMargin: '-40% 0px -55% 0px'
    });

    sections.forEach(section => observer.observe(section));
});
