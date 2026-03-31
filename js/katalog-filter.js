const filterButtons = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card');

if (filterButtons.length > 0 && productCards.length > 0) {
  const applyFilter = (selectedFilter) => {
    productCards.forEach((card) => {
      const cardCategory = (card.dataset.category || '').trim().toLowerCase();
      const showCard = selectedFilter === 'all' || cardCategory === selectedFilter;
      card.classList.toggle('is-hidden', !showCard);
    });
  };

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const selectedFilter = (button.dataset.filter || 'all').trim().toLowerCase();

      filterButtons.forEach((btn) => {
        btn.classList.toggle('is-active', btn === button);
      });

      applyFilter(selectedFilter);
    });
  });

  const defaultActiveButton =
    document.querySelector('.filter-btn[data-filter="all"]') ||
    document.querySelector('.filter-btn.is-active') ||
    filterButtons[0];

  filterButtons.forEach((btn) => {
    btn.classList.toggle('is-active', btn === defaultActiveButton);
  });

  const defaultFilter = (defaultActiveButton.dataset.filter || 'all').trim().toLowerCase();
  applyFilter(defaultFilter);
}
