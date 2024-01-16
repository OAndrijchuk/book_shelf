import Swiper from 'swiper';

import 'swiper/swiper-bundle.min.css';
import img1 from '../images/support/SaveTheChild.png';
import img2 from '../images/support/Hope.png';
import img3 from '../images/support/United24.png';
import img4 from '../images/support/InterMadicalCor.png';
import img5 from '../images/support/MedecinsSansFron.png';
import img6 from '../images/support/Razom.png';
import img7 from '../images/support/ActionAgHunger.png';
import img8 from '../images/support/WorldVision.png';
import img9 from '../images/support/SergPritula.png';
const charities = [
  {
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: img1,
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: img2,
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: img3,
  },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: img4,
  },
  {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: img5,
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: img6,
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: img7,
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: img8,
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: img9,
  },
];
const charityLogosContainer = document.querySelector('.swiper-wrapper');
const expandBtn = document.querySelector('.support-button');
function createCharityLogo(charity, index) {
  const formattedIndex = (index + 1).toString().padStart(2, '0');
  return `<li class="support-link swiper-slide">           
            <a class="support-link-url" href="${charity.url}" target="_blank">
            <span class="logo-index" >${formattedIndex}</span>
            <img class="support-link-img" src="${charity.img}" alt="${charity.title}"/>
            </a>
          </li>
      `;
}
function displayAllCharities() {
  charityLogosContainer.innerHTML = charities.map(createCharityLogo).join('');
}
displayAllCharities();
const swiper = new Swiper('.swiper-container', {
  direction: 'vertical',
  slidesPerView: 4,
  loop: true,
  autoplay: {
    delay: 1000,
  },
});

expandBtn.addEventListener('click', () => {
  swiper.slideNext();
});
