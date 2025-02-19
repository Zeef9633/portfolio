// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
});

// Typewriter Effect
const typewriterText = "IT Support & Cloud Services Specialist";
const typewriterElement = document.querySelector('.hero p');
let index = 0;

function typeWriter() {
    if (index < typewriterText.length) {
        typewriterElement.textContent += typewriterText.charAt(index);
        index++;
        setTimeout(typeWriter, 100); // Adjust typing speed here
    }
}

typeWriter();

