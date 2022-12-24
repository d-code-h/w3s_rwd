document.querySelector('nav #menu').addEventListener('click', () => {
  document.querySelector('nav span').classList.toggle('animate');
});

setInterval(() => {
  const hero = document.querySelectorAll('.header__hero div');
  const truthy = [];
  hero.forEach((each, i) => {
    truthy.push(each.classList.contains('hide'));
  });
  let i = truthy.indexOf(false);
  hero[i].classList.add('hide');
  if (i !== hero.length - 1) {
    hero[i + 1].classList.remove('hide');
  } else {
    hero[0].classList.remove('hide');
  }
}, 5000);
