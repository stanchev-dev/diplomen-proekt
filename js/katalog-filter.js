const filterButtons = document.querySelectorAll('.filter-btn');
const categorySections = document.querySelectorAll('.catalog-category');

if (filterButtons.length && categorySections.length) {
  const applyFilter = (selectedFilter) => {
    categorySections.forEach((section) => {
      const shouldShow = selectedFilter === 'all' || section.dataset.category === selectedFilter;
      section.classList.toggle('is-hidden', !shouldShow);
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
