const buyForms = document.querySelectorAll('.product-buy-form');

buyForms.forEach((form) => {
    const quantityInput = form.querySelector('.product-qty-input');

    if (!quantityInput) {
        return;
    }

    form.addEventListener('submit', (event) => {
        const selectedQuantity = Number(quantityInput.value);
        const maxQuantity = Number(quantityInput.max) || 10;

        if (selectedQuantity > maxQuantity) {
            event.preventDefault();
            alert('Няма достатъчно наличност');
        }
    });
});
