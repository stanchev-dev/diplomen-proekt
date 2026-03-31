const filterButtons = document.querySelectorAll('.filter-btn');
const categorySections = document.querySelectorAll('.catalog-category');

if (filterButtons.length && categorySections.length) {
  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const selectedFilter = button.dataset.filter;

      filterButtons.forEach((btn) => {
        btn.classList.toggle('is-active', btn === button);
      });

      categorySections.forEach((section) => {
        const shouldShow = section.dataset.category === selectedFilter;
        section.classList.toggle('is-hidden', !shouldShow);
      });
    });
  });
}
