document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".section");
    const revealSection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("reveal");
                observer.unobserve(entry.target);
            }
        });
    };
    const observer = new IntersectionObserver(revealSection, { threshold: 0.1 });
    sections.forEach(section => observer.observe(section));
});