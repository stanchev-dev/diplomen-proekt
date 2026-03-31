document.addEventListener('DOMContentLoaded', () => {
    const products = {
        'TK-101': {
            name: 'Спирачни накладки Premium',
            price: 89.90,
            priceText: '89.90 лв.',
            image: 'images/brake-pads.jpg',
            description: 'Надеждни спирачни накладки с добра износоустойчивост и стабилно поведение при спиране.'
        },
        'TK-102': {
            name: 'Комплект дискове и накладки',
            price: 149.90,
            priceText: '149.90 лв.',
            image: 'images/promo-banner.jpg',
            description: 'Практично решение за подмяна на основни елементи от спирачната система.'
        },
        'TK-201': {
            name: 'Маслен филтър Standard',
            price: 18.50,
            priceText: '18.50 лв.',
            image: 'images/oil-filter.jpg',
            description: 'Качествен филтър за надеждна работа на двигателя и ефективна филтрация на маслото.'
        },
        'TK-202': {
            name: 'Моторно масло 5W-30',
            price: 64.90,
            priceText: '64.90 лв.',
            image: 'images/engine-oil.jpg',
            description: 'Синтетично моторно масло, подходящо за ежедневна употреба и добра защита на двигателя.'
        },
        'TK-301': {
            name: 'Акумулатор 12V',
            price: 189.00,
            priceText: '189.00 лв.',
            image: 'images/battery.jpg',
            description: 'Надежден акумулатор с добри показатели за работа при различни условия.'
        },
        'TK-302': {
            name: 'Комплект чистачки',
            price: 29.90,
            priceText: '29.90 лв.',
            image: 'images/wipers.jpg',
            description: 'Практични и устойчиви чистачки за добра видимост при дъжд и лошо време.'
        },
        'TK-303': {
            name: 'Комплект автомобилни крушки',
            price: 22.90,
            priceText: '22.90 лв.',
            image: 'images/bulbs.jpg',
            description: 'Подходящ комплект крушки за по-добра видимост и безопасност по време на шофиране.'
        }
    };

    const params = new URLSearchParams(window.location.search);
    const code = params.get('code') || 'TK-101';
    const product = products[code] || products['TK-101'];

    const productImage = document.getElementById('checkout-product-image');
    const productName = document.getElementById('checkout-product-name');
    const productCode = document.getElementById('checkout-product-code');
    const productPrice = document.getElementById('checkout-product-price');
    const productDescription = document.getElementById('checkout-product-description');

    const quantityInput = document.getElementById('quantity');
    const quantityPreview = document.getElementById('checkout-quantity-preview');
    const totalPrice = document.getElementById('checkout-total-price');

    const productCodeInput = document.getElementById('product-code-input');
    const productNameInput = document.getElementById('product-name-input');

    const checkoutForm = document.getElementById('checkout-form');
    const successMessage = document.getElementById('checkout-success-message');

    productImage.src = product.image;
    productImage.alt = product.name;
    productName.textContent = product.name;
    productCode.textContent = code;
    productPrice.textContent = product.priceText;
    productDescription.textContent = product.description;

    productCodeInput.value = code;
    productNameInput.value = product.name;

    function updateTotal() {
        const quantity = Number(quantityInput.value) || 1;
        const total = (product.price * quantity).toFixed(2);

        quantityPreview.textContent = quantity;
        totalPrice.textContent = `${total} лв.`;
    }

    updateTotal();

    quantityInput.addEventListener('input', updateTotal);

    checkoutForm.addEventListener('submit', (event) => {
        event.preventDefault();

        if (!checkoutForm.checkValidity()) {
            checkoutForm.reportValidity();
            return;
        }

        successMessage.hidden = false;
        checkoutForm.reset();
        quantityInput.value = 1;
        updateTotal();

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});