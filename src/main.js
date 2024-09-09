const refs = {
  questions: document.querySelectorAll('.faq-list-item'),
  openBtn: document.querySelector('[data-menu-open]'),
  closeBtn: document.querySelector('[data-menu-close]'),
  modal: document.querySelector('[data-menu]'),
  menuLink: document.querySelectorAll('.menu-nav'),
};

refs.questions.forEach(question => {
  question.addEventListener('click', e => {
    question.classList.toggle('active');
  });
});

refs.openBtn.addEventListener('click', toggleMenu);
refs.closeBtn.addEventListener('click', toggleMenu);
refs.menuLink.forEach(link => link.addEventListener('click', toggleMenu));

function toggleMenu() {
  refs.modal.classList.toggle('is-open');
  const body = document.querySelector('body');
  if (refs.modal.classList.contains('is-open')) {
    body.style.overflow = 'hidden';
  } else {
    body.style.overflow = 'auto';
  }
}
