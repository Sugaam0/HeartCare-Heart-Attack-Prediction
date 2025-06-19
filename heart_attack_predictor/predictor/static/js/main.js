document.addEventListener('DOMContentLoaded', function() {
    // Input validation for numbers
    const inputs = document.querySelectorAll('input[type="number"]');
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            if (this.value < 0) {
                this.value = 0;
            }
        });
    });

    // Fade-in animation for sections
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fadeIn');
            }
        });
    }, { threshold: 0.1 });
    sections.forEach(section => observer.observe(section));

    // Mobile menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const menuClose = document.getElementById('menu-close');
    const mobileMenu = document.getElementById('mobile-menu');
    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden');
        const icon = menuToggle.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    };
    menuToggle.addEventListener('click', toggleMenu);
    menuClose.addEventListener('click', toggleMenu);

    // Smooth scroll for nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });
            if (!mobileMenu.classList.contains('hidden')) {
                toggleMenu();
            }
        });
    });

    // CTA button ripple effect
    document.querySelectorAll('.cta-button').forEach(button => {
        button.addEventListener('click', (e) => {
            const ripple = button.querySelector('.ripple');
            ripple.classList.remove('animate');
            void ripple.offsetWidth; // Trigger reflow
            ripple.classList.add('animate');
        });
    });

    // Active link highlighting
    const navLinks = document.querySelectorAll('.nav-link');
    const updateActiveLink = () => {
        const scrollPosition = window.scrollY + 100;
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('text-blue-600', 'font-bold');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('text-blue-600', 'font-bold');
                    }
                });
            }
        });
    };
    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink();

    // Info modal handling
    const infoButtons = document.querySelectorAll('.info-button');
    const infoModal = document.getElementById('info-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content');
    const modalClose = document.getElementById('modal-close');

    const fieldInfo = {
        'age': {
            title: 'Age',
            content: 'Your age in years. Age is a key risk factor for heart disease, as the risk increases with older age.'
        },
        'gender': {
            title: 'Gender',
            content: 'Your biological sex (0 for Female, 1 for Male). Men may have a higher risk of heart attack at younger ages, while women’s risk increases after menopause.'
        },
        'heart_rate': {
            title: 'Heart Rate',
            content: 'Your resting heart rate in beats per minute (bpm). A normal range is 60–100 bpm, but higher or lower rates may indicate heart health issues.'
        },
        'systolic-blood-pressure': {
            title: 'Systolic Blood Pressure',
            content: 'The top number in a blood pressure reading (mmHg), measuring pressure when your heart beats. Normal is below 120 mmHg; higher values may increase heart attack risk.'
        },
        'diastolic-blood-pressure': {
            title: 'Diastolic Blood Pressure',
            content: 'The bottom number in a blood pressure reading (mmHg), measuring pressure when your heart rests. Normal is below 80 mmHg; elevated levels can strain the heart.'
        },
        'blood-sugar': {
            title: 'Blood Sugar',
            content: 'Your fasting blood glucose level in mg/dL. Normal is below 100 mg/dL; higher levels (e.g., diabetes) are linked to higher heart disease risk.'
        },
        'ck-mb': {
            title: 'CK-MB',
            content: 'Creatine Kinase-MB level in ng/mL, a marker of heart muscle damage. Elevated levels may indicate recent heart injury or increased risk.'
        },
        'troponin': {
            title: 'Troponin',
            content: 'Troponin level in ng/mL, a protein released when the heart muscle is damaged. High levels are a strong indicator of heart attack risk or prior heart events.'
        }
    };

    infoButtons.forEach(button => {
        button.addEventListener('click', () => {
            const field = button.dataset.field;
            const info = fieldInfo[field] || { title: 'Unknown', content: 'No information available.' };
            modalTitle.textContent = info.title;
            modalContent.textContent = info.content;
            infoModal.classList.remove('hidden');
        });
    });

    modalClose.addEventListener('click', () => {
        infoModal.classList.add('hidden');
    });

    // Close modal on click outside
    infoModal.addEventListener('click', (e) => {
        if (e.target === infoModal) {
            infoModal.classList.add('hidden');
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !infoModal.classList.contains('hidden')) {
            infoModal.classList.add('hidden');
        }
    });
});