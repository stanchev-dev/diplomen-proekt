const filterButtons = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.catalog-grid .product-card');

if (filterButtons.length && productCards.length) {
  const applyFilter = (selectedFilter) => {
    productCards.forEach((card) => {
      const shouldShow = selectedFilter === 'all' || card.dataset.category === selectedFilter;
      card.classList.toggle('is-hidden', !shouldShow);
    });
  };

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const selectedFilter = button.dataset.filter;

      filterButtons.forEach((btn) => {
        btn.classList.toggle('is-active', btn === button);
      });

      applyFilter(selectedFilter);
    });
  });

  const defaultActiveButton = document.querySelector('.filter-btn.is-active') || filterButtons[0];

  if (defaultActiveButton) {
    filterButtons.forEach((btn) => {
      btn.classList.toggle('is-active', btn === defaultActiveButton);
    });

    applyFilter(defaultActiveButton.dataset.filter);
  }
}
