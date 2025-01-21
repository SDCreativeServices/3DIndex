document.addEventListener('DOMContentLoaded', () => {
    // Back-to-Top Button
    const backToTopButton = document.createElement('button');
    backToTopButton.className = 'back-to-top';
    backToTopButton.innerHTML = '↑';
    document.body.appendChild(backToTopButton);

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });
    document.addEventListener('DOMContentLoaded', () => {
        const navbarToggler = document.querySelector('.navbar-toggler');
        const navbarCollapse = document.querySelector('.collapse.navbar-collapse');
        const body = document.body;
    
        navbarToggler.addEventListener('click', () => {
            if (navbarCollapse.classList.contains('show')) {
                body.classList.remove('no-scroll');
            } else {
                body.classList.add('no-scroll');
            }
        });
    
        // Prevent touch gestures from propagating to the body
        navbarCollapse.addEventListener('touchmove', (e) => {
            e.stopPropagation();
        });
    
        // Remove no-scroll class when menu closes
        navbarCollapse.addEventListener('hidden.bs.collapse', () => {
            body.classList.remove('no-scroll');
        });
    });
    
