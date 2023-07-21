import img1 from '../images/support/SaveTheChild.png'
import img2 from '../images/support/Hope.png'
import img3 from '../images/support/United24.png'
import img4 from '../images/support/InterMadicalCor.png'
import img5 from '../images/support/MedecinsSansFron.png'
import img6 from '../images/support/Razom.png'
import img7 from '../images/support/ActionAgHunger.png'
import img8 from '../images/support/WorldVision.png'
import img9 from '../images/support/SergPritula.png'

// import smoothscroll from 'smoothscroll-polyfill';
// smoothscroll.polyfill();

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

const charityLogosContainer = document.querySelector('.charity-logos');
const expandBtn = document.querySelector('.support-button');
const iconButtonAngle = document.querySelector('.icon-button-angle');
const supportContainer = document.querySelector('.support-container');

function createCharityLogo(charity, index) {
  const formattedIndex = (index + 1).toString().padStart(2, '0');

  return `<li class="support-link">
            <span class="logo-index" >${formattedIndex}</span>
            <a class="support-link-url" href="${charity.url}" target="_blank"> 
              <img class="support-link-img" src="${charity.img}" alt="${charity.title}"/>
            </a>
          </li>`;
}

function displayAllCharities() {
  charityLogosContainer.innerHTML = charities.map(createCharityLogo).join('');
}

expandBtn.addEventListener('click', expandSection);

function expandSection() {
  const isExpanded = supportContainer.classList.contains('expanded');

  if (!isExpanded) {
    supportContainer.style.height = '100%';
    supportContainer.classList.add('expanded');
    iconButtonAngle.style.transform = 'rotate(-180deg)';
  } else {
    supportContainer.style.height = '0';
    supportContainer.classList.remove('expanded');
    iconButtonAngle.style.transform = 'rotate(0deg)';
  }
}


displayAllCharities();





// function expandSection() {
//   const containerHeight = supportContainer.clientHeight;
//   const isExpanded = supportContainer.classList.contains('expanded');

//   if (!isExpanded) {
//     supportContainer.style.height = `${containerHeight}px`;
//     supportContainer.classList.add('expanded');
//     iconButtonAngle.style.transform = 'rotate(-180deg)';
//   } else {
//     supportContainer.style.height = '0';
//     supportContainer.classList.remove('expanded');
//     iconButtonAngle.style.transform = 'rotate(0deg)';
//   }
// }




// function expandSection() {
//   if (window.innerWidth <= 767) {
    
//     if (charityLogosContainer.clientHeight === 352) {
//       charityLogosContainer.style.height = '100%';
//       iconButtonAngle.style.transform = 'rotate(-180deg)';
//     } else {
//       charityLogosContainer.style.height = '352px';
//       iconButtonAngle.style.transform = 'rotate(0deg)';
//     }
//   } else if (window.innerWidth >= 768 && window.innerWidth < 1439) {
    
//     if (charityLogosContainer.clientHeight === 472) {
//       charityLogosContainer.style.height = '100%';
//       iconButtonAngle.style.transform = 'rotate(-180deg)';
//     } else {
//       charityLogosContainer.style.height = '472px';
//       iconButtonAngle.style.transform = 'rotate(0deg)';
//     }
//   } else {
    
//     if (charityLogosContainer.clientHeight === 490) {
//       charityLogosContainer.style.height = '100%';
//       iconButtonAngle.style.transform = 'rotate(-180deg)';
//     } else {
//       charityLogosContainer.style.height = '490px';
//       iconButtonAngle.style.transform = 'rotate(0deg)';
//     }
//   }
// }
// displayAllCharities();


  