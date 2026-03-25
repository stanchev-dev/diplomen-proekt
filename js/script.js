(function () {
  var currentPath = window.location.pathname.split('/').pop() || 'index.html';
  var navLinks = document.querySelectorAll('.site-nav a');

  navLinks.forEach(function (link) {
    var linkPath = link.getAttribute('href');
    if (linkPath === currentPath) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });

  var yearTargets = document.querySelectorAll('.current-year');
  var currentYear = new Date().getFullYear();
  yearTargets.forEach(function (element) {
    element.textContent = currentYear;
  });
})();
