const filterButtons = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const selectedFilter = button.dataset.filter;

    filterButtons.forEach((btn) => btn.classList.remove('is-active'));
    button.classList.add('is-active');

    productCards.forEach((card) => {
      const cardCategory = card.dataset.category;
      const showCard = selectedFilter === 'all' || cardCategory === selectedFilter;

      card.classList.toggle('is-hidden', !showCard);
    });
  });
});
