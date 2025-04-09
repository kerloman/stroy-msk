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

const phoneInput = document.querySelector('#phone');
const maskElement = document.getElementById('phone-mask');

phoneInput.addEventListener('input', (e) => {
  let val = phoneInput.value.replace(/\D/g, '');

  // Удаляем лишнюю 7, если пользователь сам её ввёл
  if (val.startsWith('77')) {
    val = val.slice(1);
  }

  // УдаляемLeading символы, кроме первой 7
  if (!val.startsWith('7')) {
    val = '7' + val;
  }

  val = val.substring(0, 11);

  let formatted = '+7';
  let visibleMask = '(___) ___-__-__';

  if (val.length > 1) {
    formatted += ' (' + val.substring(1, 4);
    visibleMask = '___-__-__';
  }
  if (val.length >= 4) {
    formatted += ') ' + val.substring(4, 7);
    visibleMask = '__-__';
  }
  if (val.length >= 7) {
    formatted += '-' + val.substring(7, 9);
    visibleMask = '__';
  }
  if (val.length >= 9) {
    formatted += '-' + val.substring(9, 11);
    visibleMask = '';
  }

  phoneInput.value = formatted;

  const maskSpan = document.getElementById('phone-mask');
  if (maskSpan) {
    maskSpan.textContent = visibleMask;
  }
  if (val.length <= 1) {
      maskSpan.textContent = '(___) ___-__-__';
  }
});

phoneInput.addEventListener('keydown', (e) => {
  const isBackspace = e.key === 'Backspace';

  if (!isBackspace) return;

  e.preventDefault();

  let digits = phoneInput.value.replace(/\D/g, '').slice(0, -1);

  // Проверка на случай полного удаления
  if (!digits.startsWith('7')) {
    digits = '7' + digits;
  }

  digits = digits.substring(0, 11);

  let formatted = '+7';
  let visibleMask = '(___) ___-__-__';

  if (digits.length > 1) {
    formatted += ' (' + digits.substring(1, 4);
    visibleMask = '___-__-__';
  }
  if (digits.length >= 4) {
    formatted += ') ' + digits.substring(4, 7);
    visibleMask = '__-__';
  }
  if (digits.length >= 7) {
    formatted += '-' + digits.substring(7, 9);
    visibleMask = '__';
  }
  if (digits.length >= 9) {
    formatted += '-' + digits.substring(9, 11);
    visibleMask = '';
  }

  phoneInput.value = formatted;

  const maskElement = document.getElementById('phone-mask');
  if (maskElement) {
    maskElement.textContent = visibleMask;
  }
  if (digits.length <= 1) {
      maskElement.textContent = '(___) ___-__-__';
  }
});

const burger = document.getElementById('burger');
const mobileNav = document.getElementById('mobileNav');
const closeNav = document.getElementById('closeNav');

burger.addEventListener('click', (e) => {
  e.stopPropagation();
  mobileNav.classList.add('open');
  burger.style.display = 'none';
  document.body.style.overflow = 'hidden';
});

document.querySelectorAll('#mobileNav a').forEach(link => {
  link.addEventListener('click', (event) => {
    event.stopPropagation();
    burger.style.display = 'block';
    mobileNav.classList.remove('open');
    document.body.style.overflow = '';
  });
});

closeNav.addEventListener('click', (event) => {
  event.stopPropagation();
  mobileNav.classList.remove('open');
  burger.style.display = 'block';
});

document.addEventListener('click', (e) => {
  const nav = document.getElementById('mobileNav');
  const burger = document.getElementById('burger');
  const isNavOpen = nav.classList.contains('open');

  if (
    isNavOpen &&
    !nav.contains(e.target) &&
    !burger.contains(e.target)
  ) {
    nav.classList.remove('open');
    burger.style.display = 'block';
    document.body.style.overflow = '';
  }
});