import '../scss/style.scss';

// Images
import logoImg from '../assets/img/logo.png';
import heroImg from '../assets/img/hero.png';
import featuresDigitalImg from '../assets/img/digital.jpg';
import featuresPlantImg from '../assets/img/grow-lazy.jpg';
import featuresCreditImg from '../assets/img/card.jpg';
import testimonialPic1 from '../assets/img/user-1.jpg';
import testimonialPic2 from '../assets/img/user-2.jpg';
import testimonialPic3 from '../assets/img/user-3.jpg';
import footerIcon from '../assets/img/icon.png';

// Icons

import featuresIconMonitor from '../assets/img/icons.svg';

console.log('Webpack is serving!');

// Selecting elements on page

const btnOpen = document.getElementById('btnOpen');
const btnClose = document.getElementById('btnClose');
const mobileNav = document.querySelector('.nav-wrapper');

const showMobileNav = () => {
  // mobileNav.style.transform = 'translateX(0%)';

  // Rather than overriding the current CSS styles using the inline style above, lets first: using the following methods to getComputedStyle and getPropertyValue to check the value before making the modification

  const computedStyle = window.getComputedStyle(mobileNav);
  const currentTransform = computedStyle.getPropertyValue('transform');

  if (currentTransform.includes('matrix(1, 0, 0, 1, -')) {
    mobileNav.style.transform = 'translateX(0%)';

    btnOpen.setAttribute('aria-expanded', 'true');
    btnClose.setAttribute('aria-expanded', 'true');
  }
};

const hideMobileMenu = () => {
  const computedStyle = window.getComputedStyle(mobileNav);
  const currentTransform = computedStyle.getPropertyValue('transform');

  if (currentTransform.includes('matrix(1, 0, 0, 1, 0')) {
    mobileNav.style.transform = 'translateX(-100%)';
    btnOpen.setAttribute('aria-expanded', 'false');
    btnClose.setAttribute('aria-expanded', 'false');
  }
};

btnOpen.addEventListener('click', () => {
  const isExpanded = btnOpen.getAttribute('aria-expanded');
  if (isExpanded === 'false') {
    showMobileNav();
  }
});

btnClose.addEventListener('click', () => {
  const isClosed = btnClose.getAttribute('aria-expanded');
  if (isClosed === 'true') {
    hideMobileMenu();
  }
});
