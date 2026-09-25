// Smooth scroll for navigation
document.querySelectorAll('header nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simple form validation
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();

    if (name === "" || email === "") {
        alert("Please fill out all required fields.");
        return;
    }

    alert("Thank you, " + name + "! Your form has been submitted.");
    this.reset();
});
