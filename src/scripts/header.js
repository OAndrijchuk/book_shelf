const menuLinks = document.querySelectorAll('.menu-link');
menuLinks.forEach(el => el.classList.remove('activ-page'));
menuLinks[0].classList.add('activ-page');

const mobileLinks = document.querySelectorAll('.mob-menu-link');
mobileLinks.forEach(el => el.classList.remove('activ-page'));
mobileLinks[0].classList.add('activ-page');
