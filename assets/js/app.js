// Function to handle active link based on URL hash
function setActiveLink() {
    const links = document.querySelectorAll(".nav-link");
    const currentHash = window.location.hash;

    links.forEach((link) => {
        if (link.getAttribute("href") === currentHash) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
}

// Call the function initially and when the hash changes
window.addEventListener("load", setActiveLink);
window.addEventListener("hashchange", setActiveLink);