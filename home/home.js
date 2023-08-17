const navLinks = document.querySelectorAll('.mainnav .btnwrap a');

navLinks.forEach(link => {
    link.addEventListener('click', smoothScroll);
});

// Smooth scrolling function
function smoothScroll(event) {
    event.preventDefault(); // Prevent default link behavior

    const targetId = event.target.getAttribute('href'); // Get the target section's id
    const targetSection = document.querySelector(targetId); // Get the target section element
    const offsetTop = targetSection.offsetTop; // Calculate target section's top offset

    // Scroll smoothly to the target section
    window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
    });
}
