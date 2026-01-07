document.addEventListener('DOMContentLoaded', () => {
    // Mouse Glow Layout
    const glow = document.querySelector('.cursor-glow');
    document.addEventListener('mousemove', (e) => {
        glow.style.left = e.clientX + 'px';
        glow.style.top = e.clientY + 'px';
    });

    console.log("Portfolio loaded!");

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

    // Image Modal Logic
    const modal = document.getElementById("image-modal");
    const modalImg = document.getElementById("modal-img");
    const captionText = document.getElementById("caption");
    const closeBtn = document.querySelector(".close-modal");

    // Select images to be zoomable (Carousel + Web3 Section)
    const zoomableImages = document.querySelectorAll('.carousel-slide img, .blockchain-images img');

    zoomableImages.forEach(img => {
        img.addEventListener('click', function () {
            modal.style.display = "block";
            // Add a slight delay to trigger the transition
            setTimeout(() => modal.classList.add('show'), 10);
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;

            // Disable scroll
            document.body.style.overflow = "hidden";
        });
    });

    // Close Modal Function
    function closeModal() {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }, 300); // Wait for transition
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    // Close on outside click
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === "Escape" && modal.style.display === "block") {
            closeModal();
        }
    });
});
