// Извиква се от onclick на бутона и стартира плавно връщане към началото на страницата.
function ScrollToTop() {
  // window.scrollTo мести прозореца до top: 0 (най-горе), а behavior: "smooth" добавя плавна анимация.
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
