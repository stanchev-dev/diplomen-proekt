const checkoutForm = document.querySelector('#checkout-form');

if (checkoutForm) {
    checkoutForm.addEventListener('submit', (event) => {
        event.preventDefault();

        if (!checkoutForm.checkValidity()) {
            checkoutForm.reportValidity();
            return;
        }

        alert('Успешно плащане');
        window.location.href = 'katalog.html';
    });
}
