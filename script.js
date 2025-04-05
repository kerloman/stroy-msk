// Плавная прокрутка
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });
  
  // Обработка формы
  document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Заявка отправлена! Мы свяжемся с вами.");
    this.reset();
  });