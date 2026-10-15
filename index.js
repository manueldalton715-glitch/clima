        // Menú móvil
        const toggle = document.querySelector('.menu-toggle');
        const menu = document.getElementById('menu');
        toggle.addEventListener('click', () => menu.classList.toggle('active'));

        // Animaciones al hacer scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('visible');
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

        // Header con sombra al hacer scroll
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            header.style.boxShadow = window.scrollY > 50 ? '0 2px 20px rgba(0,0,0,0.08)' : 'none';
        });
