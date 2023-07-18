const charities = [
    {
      title: 'Save the Children',
      url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
      img: '../images/support/SaveTheChild.png',
    },
    {
      title: 'Project HOPE',
      url: 'https://www.projecthope.org/country/ukraine/',
      img: '../images/support/Hope.png',
    },
    {
      title: 'UNITED24',
      url: 'https://u24.gov.ua/uk',
      img: '../images/support/United24.png',
    },
    {
      title: 'International Medical Corps',
      url: 'https://internationalmedicalcorps.org/country/ukraine/',
      img: '../images/support/InterMadicalCor.png',
    },
    {
      title: 'Medicins Sans Frontieres',
      url: 'https://www.msf.org/ukraine',
      img: '../images/support/MedecinsSansFron.png',
    },
    {
      title: 'RAZOM',
      url: 'https://www.razomforukraine.org/',
      img: '../images/support/Razom.png',
    },
    {
      title: 'Action against hunger',
      url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
      img: '../images/support/ActionAgHunger.png',
    },
    {
      title: 'World vision',
      url: 'https://www.wvi.org/emergencies/ukraine',
      img: '../images/support/WorldVision.png',
    },
    {
      title: 'Serhiy Prytula Charity Foundation',
      url: 'https://prytulafoundation.org/en',
      img: '../images/support/SergPritula.png',
    },
  ];
  
  const charityLogosContainer = document.querySelector('.charity-logos');


  function createCharityLogo(charity) {
    return `<a href="${charity.url}" target="_blank"> 
             <img src="${charity.img}" alt="${charity.title}"/>
            </a>`;
  }
  
  charities.forEach(function(charity) {
    const charityLogo = createCharityLogo(charity);
    charityLogosContainer.innerHTML += charityLogo;
  });