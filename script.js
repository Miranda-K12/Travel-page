const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navMenu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
})

document.querySelectorAll('.navMenu a').forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});