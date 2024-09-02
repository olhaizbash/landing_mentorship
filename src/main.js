const refs = {
  questions: document.querySelectorAll('.faq-list-item'),
};

refs.questions.forEach(question => {
  question.addEventListener('click', e => {
    question.classList.toggle('active');
  });
});
