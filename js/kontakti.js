document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const successBanner = document.getElementById('contact-success-banner');
    const phoneInput = document.getElementById('phone');

    if (!contactForm) {
        return;
    }

    if (phoneInput) {
        phoneInput.addEventListener('input', () => {
            phoneInput.value = phoneInput.value.replace(/\D/g, '');
        });
    }

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        if (!contactForm.checkValidity()) {
            contactForm.reportValidity();
            return;
        }

        if (successBanner) {
            successBanner.hidden = false;
            successBanner.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }

        contactForm.reset();
    });
});
