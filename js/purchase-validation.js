const buyForms = document.querySelectorAll('.product-buy-form');

buyForms.forEach((form) => {
    const quantityInput = form.querySelector('.product-qty-input');
    let maxQuantity = 10;

    form.addEventListener('submit', (event) => {
        const selectedQuantity = Number(quantityInput.value);

        if (selectedQuantity > maxQuantity) {
            event.preventDefault();
            alert('Няма достатъчно наличност');
        } else {
            alert('Поръчката е успешна');
        }
    });
});
