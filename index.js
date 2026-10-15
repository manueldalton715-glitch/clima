        // Menú móvil
        const toggle = document.querySelector('.menu-toggle');
        const menu = document.getElementById('menu');

        const setMenuOpen = (isOpen) => {
            menu.classList.toggle('active', isOpen);
            toggle.setAttribute('aria-expanded', String(isOpen));
            toggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
        };

        toggle.addEventListener('click', () => setMenuOpen(!menu.classList.contains('active')));
        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => setMenuOpen(false));
        });
        document.addEventListener('keydown', event => {
            if (event.key === 'Escape') setMenuOpen(false);
        });

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
