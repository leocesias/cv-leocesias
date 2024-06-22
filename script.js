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

    const observer = new IntersectionObserver(revealSection, {
        root: null,
        threshold: 0.2
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});




let currentLanguage = 'en';
function switchLanguage(lang) {
    currentLanguage = lang;
    updateContent();
}

function updateContent() {
    document.querySelectorAll('.navbar ul li').forEach(item => {
        const anchor = item.querySelector('a');
        const sectionId = anchor.getAttribute('href').substring(1); // Get section id without '#'
        switch (currentLanguage) {
            case 'en':
                switch (sectionId) {
                    case 'welcome':
                        anchor.textContent = 'Welcome';
                        break;
                    case 'about':
                        anchor.textContent = 'About Me';
                        break;
                    case 'skills':
                        anchor.textContent = 'Knowledge';
                        break;
                    case 'contact':
                        anchor.textContent = 'Contact';
                        break;
                }
                break;
            case 'es':
                switch (sectionId) {
                    case 'welcome':
                        anchor.textContent = 'Bienvenida';
                        break;
                    case 'about':
                        anchor.textContent = 'Sobre Mí';
                        break;
                    case 'skills':
                        anchor.textContent = 'Conocimientos';
                        break;
                    case 'contact':
                        anchor.textContent = 'Contacto';
                        break;
                }
                break;
        }
    });
}


function toggleLanguageDropdown() {
    var dropdown = document.getElementById('languageDropdown');
    dropdown.classList.toggle('show');
}

function switchLanguage(lang) {
    console.log('Switching to ' + lang);
}