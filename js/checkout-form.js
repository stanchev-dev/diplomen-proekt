const productsByCode = {
    'TK-101': {
        name: 'Спирачни накладки висок клас',
        price: '89.90 €',
        stock: '10',
        image: 'images/brake-pads.jpg',
        description: 'Надеждни спирачни накладки с добра износоустойчивост и стабилно поведение при спиране.'
    },
    'TK-102': {
        name: 'Комплект дискове и накладки',
        price: '149.90 €',
        stock: '8',
        image: 'images/promo-banner.jpg',
        description: 'Практично решение за подмяна на основни елементи от спирачната система.'
    },
    'TK-103': {
        name: 'Маслен филтър стандартен клас',
        price: '18.50 €',
        stock: '25',
        image: 'images/oil-filter.jpg',
        description: 'Качествен филтър за надеждна работа на двигателя и ефективна филтрация на маслото.'
    },
    'TK-104': {
        name: 'Моторно масло 5W-30',
        price: '64.90 €',
        stock: '14',
        image: 'images/engine-oil.jpg',
        description: 'Синтетично моторно масло, подходящо за ежедневна употреба и добра защита на двигателя.'
    },
    'TK-105': {
        name: 'Акумулатор 12V',
        price: '189.00 €',
        stock: '6',
        image: 'images/battery.jpg',
        description: 'Надежден акумулатор с добри показатели за работа при различни условия.'
    },
    'TK-106': {
        name: 'Летни гуми Michelin',
        price: '189.00 €',
        stock: '12',
        image: 'images/summer-tires.jpg',
        description: 'Надеждни летни гуми с добро сцепление и стабилност при високи температури.'
    },
    'TK-107': {
        name: 'Комплект чистачки',
        price: '29.90 €',
        stock: '20',
        image: 'images/wipers.jpg',
        description: 'Практични и устойчиви чистачки за добра видимост при дъжд и лошо време.'
    },
    'TK-108': {
        name: 'Комплект автомобилни крушки',
        price: '22.90 €',
        stock: '18',
        image: 'images/bulbs.jpg',
        description: 'Подходящ комплект крушки за по-добра видимост и безопасност по време на шофиране.'
    },
    'TK-109': {
        name: 'Диагностичен скенер',
        price: '31.90 €',
        stock: '11',
        image: 'images/diagnostika.jpg',
        description: 'Компактен диагностичен уред за четене и изчистване на грешки в автомобила чрез мобилно приложение.'
    },
    'TK-110': {
        name: 'Зарядно за акумулатор 12V',
        price: '55.90 €',
        stock: '9',
        image: 'images/battery-charger.jpg',
        description: 'Интелигентно зарядно устройство с автоматично регулиране на напрежението за безопасно зареждане.'
    },
    'TK-111': {
        name: 'Стелки за автомобил',
        price: '39.90 €',
        stock: '15',
        image: 'images/stelki.jpg',
        description: 'Здрави и устойчиви стелки, предпазващи интериора от замърсяване и влага.'
    },
    'TK-112': {
        name: 'Софтуер за парктроник',
        price: '71.90 €',
        stock: '7',
        image: 'images/parktronik.jpg',
        description: 'Система за паркиране с ултразвукови сензори и визуален дисплей за по-лесно маневриране.'
    },
    'TK-113': {
        name: 'Крик за автомобил',
        price: '47.90 €',
        stock: '13',
        image: 'images/krik.jpg',
        description: 'Здрав и компактен крик, подходящ за смяна на гуми и аварийни ситуации.'
    },
    'TK-114': {
        name: 'Вериги за сняг комплект',
        price: '79.90 €',
        stock: '10',
        image: 'images/verigi-za-gumi.jpg',
        description: 'Надеждни вериги за подобрено сцепление при зимни условия и заснежени пътища.'
    },
    'TK-115': {
        name: 'Прахосмукачка за автомобил 12V',
        price: '35.90 €',
        stock: '12',
        image: 'images/prahosmukachka-za-kola.jpg',
        description: 'Компактна прахосмукачка за лесно почистване на интериора на автомобила.'
    },
    'TK-116': {
        name: 'Антифриз концентрат -30°C',
        price: '27.90 €',
        stock: '20',
        image: 'images/antifreeze.webp',
        description: 'Висококачествен антифриз за защита на охладителната система при ниски температури.'
    }

};

function populateCheckoutProduct() {
    const params = new URLSearchParams(window.location.search);
    const selectedCode = params.get('code');

    if (!selectedCode || !productsByCode[selectedCode]) {
        return;
    }

    const selectedProduct = productsByCode[selectedCode];

    document.querySelector('#checkout-product-name').textContent = selectedProduct.name;
    document.querySelector('#checkout-product-code').textContent = selectedCode;
    document.querySelector('#checkout-product-price').textContent = selectedProduct.price;
    document.querySelector('#checkout-product-stock').textContent = selectedProduct.stock;
    document.querySelector('#checkout-product-description').textContent = selectedProduct.description;

    const checkoutImage = document.querySelector('#checkout-product-image');
    checkoutImage.src = selectedProduct.image;
    checkoutImage.alt = selectedProduct.name;
}

populateCheckoutProduct();

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
