document.addEventListener('DOMContentLoaded', () => {
    const products = {
        'TK-101': {
            name: 'Спирачни накладки висок клас',
            price: 89.90,
            priceText: '89.90 €',
            image: 'images/brake-pads.jpg',
            description: 'Надеждни спирачни накладки с добра износоустойчивост и стабилно поведение при спиране.',
            stock: 10
        },
        'TK-102': {
            name: 'Комплект дискове и накладки',
            price: 149.90,
            priceText: '149.90 €',
            image: 'images/promo-banner.jpg',
            description: 'Практично решение за подмяна на основни елементи от спирачната система.',
            stock: 10
        },
        'TK-201': {
            name: 'Маслен филтър стандартен клас',
            price: 18.50,
            priceText: '18.50 €',
            image: 'images/oil-filter.jpg',
            description: 'Качествен филтър за надеждна работа на двигателя и ефективна филтрация на маслото.',
            stock: 10
        },
        'TK-202': {
            name: 'Моторно масло 5W-30',
            price: 64.90,
            priceText: '64.90 €',
            image: 'images/engine-oil.jpg',
            description: 'Синтетично моторно масло, подходящо за ежедневна употреба и добра защита на двигателя.',
            stock: 10
        },
        'TK-301': {
            name: 'Акумулатор 12V',
            price: 189.00,
            priceText: '189.00 €',
            image: 'images/battery.jpg',
            description: 'Надежден акумулатор с добри показатели за работа при различни условия.',
            stock: 10
        },
        'TK-302': {
            name: 'Комплект чистачки',
            price: 29.90,
            priceText: '29.90 €',
            image: 'images/wipers.jpg',
            description: 'Практични и устойчиви чистачки за добра видимост при дъжд и лошо време.',
            stock: 10
        },
        'TK-401': {
            name: 'Преносим компресор за гуми 12V AirMax Compact',
            price: 59.90,
            priceText: '59.90 €',
            image: 'images/tire-compressor.webp',
            description: 'Компактен компресор с захранване от запалка 12V, подходящ за бързо напомпване на автомобилни гуми при пътуване или ежедневна употреба.',
            stock: 10
        },
        'TK-303': {
            name: 'Комплект автомобилни крушки',
            price: 22.90,
            priceText: '22.90 €',
            image: 'images/bulbs.jpg',
            description: 'Подходящ комплект крушки за по-добра видимост и безопасност по време на шофиране.',
            stock: 10
        }
    };

    const params = new URLSearchParams(window.location.search);
    const requestedCode = params.get('code') || 'TK-101';
    const resolvedCode = products[requestedCode] ? requestedCode : 'TK-101';
    const product = products[resolvedCode];
    const requestedQuantity = Number(params.get('qty'));

    const productImage = document.getElementById('checkout-product-image');
    const productName = document.getElementById('checkout-product-name');
    const productCode = document.getElementById('checkout-product-code');
    const productPrice = document.getElementById('checkout-product-price');
    const productStock = document.getElementById('checkout-product-stock');
    const productDescription = document.getElementById('checkout-product-description');

    const quantityInput = document.getElementById('quantity');
    const quantityPreview = document.getElementById('checkout-quantity-preview');
    const totalPrice = document.getElementById('checkout-total-price');

    const productCodeInput = document.getElementById('product-code-input');
    const productNameInput = document.getElementById('product-name-input');

    const checkoutForm = document.getElementById('checkout-form');
    const successBanner = document.getElementById('checkout-success-banner');
    const phoneInput = document.getElementById('phone');
    const postcodeInput = document.getElementById('postcode');

    function getSafeQuantity(value, maxStock) {
        if (!Number.isInteger(value) || value < 1 || value > maxStock) {
            return 1;
        }

        return value;
    }

    const safeInitialQuantity = getSafeQuantity(requestedQuantity, product.stock);

    productImage.src = product.image;
    productImage.alt = product.name;
    productName.textContent = product.name;
    productCode.textContent = resolvedCode;
    productPrice.textContent = product.priceText;
    productStock.textContent = product.stock;
    productDescription.textContent = product.description;

    productCodeInput.value = resolvedCode;
    productNameInput.value = product.name;
    quantityInput.min = '1';
    quantityInput.max = String(product.stock);
    quantityInput.value = safeInitialQuantity;

    function updateTotal() {
        const quantity = getSafeQuantity(Number(quantityInput.value), product.stock);
        quantityInput.value = quantity;
        const total = (product.price * quantity).toFixed(2);

        quantityPreview.textContent = quantity;
        totalPrice.textContent = `${total} €`;
    }

    updateTotal();

    quantityInput.addEventListener('input', updateTotal);

    if (phoneInput) {
        phoneInput.addEventListener('input', () => {
            phoneInput.value = phoneInput.value.replace(/\D/g, '');
        });
    }

    if (postcodeInput) {
        postcodeInput.addEventListener('input', () => {
            postcodeInput.value = postcodeInput.value.replace(/\D/g, '').slice(0, 4);
        });
    }

    checkoutForm.addEventListener('submit', (event) => {
        event.preventDefault();

        if (!checkoutForm.checkValidity()) {
            checkoutForm.reportValidity();
            return;
        }

        if (successBanner) {
            successBanner.hidden = false;
            successBanner.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }

        checkoutForm.reset();
        quantityInput.value = 1;
        updateTotal();
    });
});
