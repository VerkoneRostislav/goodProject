let menu = document.querySelector(".fixed-menu");

// Обработчик клика для изменения активной ссылки
menu.addEventListener('click', function(event) {
  let clickTarget = event.target;
  let activeBtn = document.querySelector('.active');

  if (clickTarget.classList.contains('nav-link')) {
    if (activeBtn) {
      activeBtn.classList.remove('active');
    }
    clickTarget.classList.add('active');
  }
});

// Обработчик события прокрутки
let classLink = '.main-link';
window.onscroll = function() {
  let h = document.documentElement.clientHeight;
  // Пример с использованием h*3 и h*4 вместо h3 и h4
  if (window.scrollY >= h * 4) {
    classLink = '.comments-link';
  }
  else if (window.scrollY >= h * 3) {
    classLink = '.works-link';
  }
  else if (window.scrollY >= h * 2) {
    classLink = '.skills-link';
  }
  else if (window.scrollY >= h) {
    classLink = '.about-link';
  }
  else {
    classLink = '.main-link';
  }
}

// Обработчик клика по иконке бургер-меню
document.querySelector(".mobile-img").addEventListener("click", function(event) {
  document.querySelector(".mobile-menu").classList.toggle("hide");
  document.body.classList.toggle("off-scroll"); // Добавляет/удаляет класс для блокировки прокрутки
});

// Обработчик клика по ссылкам в мобильном меню для его закрытия
menu.addEventListener('click', function(event) {
  let clickTarget = event.target;
  if (clickTarget.classList.contains('nav-link')) {
    let mobile = document.querySelector('.mobile-menu');
    if (!mobile.classList.contains('hide')) {
      mobile.classList.add('hide');
      document.body.classList.remove('off-scroll'); // Убирает блокировку прокрутки
    }
  }
});