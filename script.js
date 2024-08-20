const mainWindow = document.getElementById('mainWindow');
const tabs = document.querySelectorAll('.tab');
const sections = document.querySelectorAll('.section');
let currentIndex = 0;

function scrollToSection(index) {
    if (index < 0 || index >= sections.length) return; // Prevent out-of-bounds
    mainWindow.scrollTo({ left: index * mainWindow.clientWidth, behavior: 'smooth' });
    currentIndex = index; // Update current index

    // Update active tab
    tabs.forEach(tab => tab.classList.remove('active'));
    tabs[currentIndex].classList.add('active');
}

// Function to set the active tab based on the index
function setActiveTabFromHash() {
    const hash = window.location.hash; // Get the URL fragment
    const index = parseInt(hash.replace('#', '')); // Extract the index from the hash

    if (!isNaN(index)) {
        scrollToSection(index); // Scroll to the section if the index is valid
    }
}

// Initialize the first tab as active
tabs[currentIndex].classList.add('active');

// Add click event listeners to tabs
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const index = parseInt(tab.getAttribute('data-index'));
        scrollToSection(index);
        // Update the URL hash without scrolling
        window.location.hash = `#${index}`;
    });
});

// Check the URL hash on page load
window.addEventListener('load', setActiveTabFromHash);
window.addEventListener('hashchange', setActiveTabFromHash); // Update on hash change
