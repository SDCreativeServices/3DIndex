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

// Show the first page by default
document.addEventListener('DOMContentLoaded', () => {
    showPage('page1');
});
