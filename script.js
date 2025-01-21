document.addEventListener('DOMContentLoaded', () => {
    // Back-to-Top Button
    const backToTopButton = document.createElement('button');
    backToTopButton.className = 'back-to-top';
    backToTopButton.innerHTML = '↑';
    document.body.appendChild(backToTopButton);

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Hamburger Menu Scrolling Logic
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.collapse.navbar-collapse');
    const body = document.body;

    // Disable scrolling when the menu is open
    const disableScroll = (e) => {
        e.preventDefault();
    };

    // Toggle scrolling when the menu is opened/closed
    navbarToggler.addEventListener('click', () => {
        if (navbarCollapse.classList.contains('show')) {
            // Menu is closing
            body.classList.remove('no-scroll');
            document.removeEventListener('touchmove', disableScroll, { passive: false });
            document.removeEventListener('wheel', disableScroll, { passive: false });
        } else {
            // Menu is opening
            body.classList.add('no-scroll');
            document.addEventListener('touchmove', disableScroll, { passive: false });
            document.addEventListener('wheel', disableScroll, { passive: false });
        }
    });

    // Ensure scrolling is re-enabled when the menu closes
    navbarCollapse.addEventListener('hidden.bs.collapse', () => {
        body.classList.remove('no-scroll');
        document.removeEventListener('touchmove', disableScroll, { passive: false });
        document.removeEventListener('wheel', disableScroll, { passive: false });
    });
});
