function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach((page) => {
        page.classList.remove('active');
    });

    // Show the selected page
    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        selectedPage.classList.add('active');
    }

    // Update active link
    document.querySelectorAll('nav ul li a').forEach((link) => {
        link.classList.remove('active');
    });
    document.querySelector(`nav ul li a[href="#${pageId}"]`).classList.add('active');
}
document.querySelectorAll('.sketchfab-embed-wrapper iframe').forEach(iframe => {
    const spinner = document.createElement('div');
    spinner.className = 'spinner';
    iframe.parentElement.appendChild(spinner);

    iframe.addEventListener('load', () => {
        spinner.remove();
    });
});
// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const backToTopButton = document.getElementById('backToTop');

    // Show or hide the button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            backToTopButton.style.display = 'block'; // Show button
        } else {
            backToTopButton.style.display = 'none'; // Hide button
        }
    });

    // Scroll to the top smoothly when the button is clicked
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Optional: Close the menu when clicking on a link
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
});

// Show the first page by default
document.addEventListener('DOMContentLoaded', () => {
    showPage('page1');
});
document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('searchBar');
    const pages = document.querySelectorAll('.page');
    const noResultsMessage = document.createElement('p');

    // Create a "no results" message element
    noResultsMessage.id = 'noResults';
    noResultsMessage.innerText = 'No matching results found.';
    noResultsMessage.style.textAlign = 'center';
    noResultsMessage.style.display = 'none';
    document.body.appendChild(noResultsMessage);

    searchBar.addEventListener('input', () => {
        const query = searchBar.value.toLowerCase();
        let hasResults = false;

        // Ensure all pages are temporarily visible for the search
        pages.forEach(page => {
            page.style.display = 'block'; // Temporarily make all pages visible
        });

        // Search through all pages and their items
        pages.forEach(page => {
            const items = page.querySelectorAll('.sketchfab-embed-wrapper');
            let pageHasMatches = false;

            items.forEach(item => {
                const caption = item.querySelector('p')?.innerText.toLowerCase() || '';

                if (caption.includes(query)) {
                    item.style.display = 'block'; // Show matching item
                    pageHasMatches = true;
                } else {
                    item.style.display = 'none'; // Hide non-matching item
                }
            });

            // Hide the page if no matches are found within it
            page.style.display = pageHasMatches ? 'block' : 'none';
            if (pageHasMatches) hasResults = true;
        });

        // Show or hide the "no results" message
        noResultsMessage.style.display = hasResults ? 'none' : 'block';
    });
});

// Show the first page by default
document.addEventListener('DOMContentLoaded', () => {
    const firstPage = document.getElementById('page1');
    if (firstPage) firstPage.style.display = 'block';
});
