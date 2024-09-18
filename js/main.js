// next page
document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('.section');
  const buttons = document.querySelectorAll('button[data-action="next"]');

  let currentSection = 0;

  function showSection(index) {
    sections.forEach((section, idx) => {
      section.classList.toggle('active', idx === index);
    });
  }

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      if (currentSection < sections.length - 1) {
        currentSection++;
        showSection(currentSection);
      }
    });
  });

  showSection(currentSection);
});

// sound
const soundBtn = document.querySelector('.main__sound');
soundBtn.addEventListener('click', () => {
  soundBtn.classList.toggle('disabled');
});

// slider
new Swiper('.swiper', {
  loop: true,

  navigation: {
    nextEl: '.choose__slider-btn--next',
    prevEl: '.choose__slider-btn--prev',
  },
});
