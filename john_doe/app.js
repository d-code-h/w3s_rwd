const links = document.querySelectorAll('a');

links.forEach((a) => {
  a.addEventListener('mouseover', (e) => {
    if (window.innerWidth > 600)
      return links.forEach((a) => a.classList.add('link-dark-lg'));
    links.forEach((a) => a.classList.remove('link-dark'));
  });
});

links.forEach((a) => {
  a.addEventListener('mouseout', (e) => {
    if (window.innerWidth > 600)
      return links.forEach((a) => a.classList.add('link-dark-lg'));
    links.forEach((a) => a.classList.add('link-dark'));
  });
});

const linkEffect = () => {
  if (window.innerWidth > 600)
    return links.forEach((a) => a.classList.remove('link-dark'));

  links.forEach((a) => a.classList.remove('link-dark-lg'));
  links.forEach((a) => a.classList.add('link-dark'));
};

window.addEventListener('load', () => linkEffect());
window.addEventListener('resize', () => linkEffect());
