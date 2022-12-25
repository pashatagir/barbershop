const mobMenuEl = document.querySelector('.mobile-menu');
const btnOpenMenuEl = document.getElementById('open-menu');
const btnCloseMenuEl = document.getElementById('close-menu');

btnOpenMenuEl.addEventListener('click', () => {
  btnOpenMenuEl.classList.add('is-hiden');
  mobMenuEl.classList.remove('is-hiden');
  btnCloseMenuEl.classList.remove('is-hiden');
});

btnCloseMenuEl.addEventListener('click', () => {
  btnOpenMenuEl.classList.remove('is-hiden');
  mobMenuEl.classList.add('is-hiden');
  btnCloseMenuEl.classList.add('is-hiden');
});
