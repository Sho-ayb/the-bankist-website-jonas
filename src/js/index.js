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
const learnMoreLink = document.querySelector('.header-cta-learnmore');
const sectionFeatures = document.getElementById('section-features');

// Mobile menu when user clicks on button when the viewport is < 768px in width

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

// Learn more anchor link should appear when the viewport is >= 768px width

const checkViewportWidth = () => {
  const viewportWidth = window.visualViewport.width;

  if (viewportWidth >= 768) {
    learnMoreLink.classList.remove('hidden');
  } else {
    learnMoreLink.classList.add('hidden');
  }
};

// Invoking the function here so that the anchor link will appear if the viewport width is >= 768px in the first instance.

checkViewportWidth();

// Attaching an event listener so that the anchor link can be hidden when the viewport width is < 768px.

window.addEventListener('resize', checkViewportWidth);

// Implementing smooth scrolling to section-features

/*

To begin with: we will get the x and y coords using getBoundingClientRect() method, this provides us with the x and y coords of an element that is positioned on the page.


We can then determine the x and y position plus the pageXOffset and pageYOffset to scroll the position of the page to the section-features.

We will also a latest and better implementation using Element.scrollIntoView() method instead. This is because the above properties are now deprecated.


*/

learnMoreLink.addEventListener('click', (e) => {
  e.preventDefault();

  const s1coords = sectionFeatures.getBoundingClientRect();

  // lets log the coords to the console: we get a DOMRect object

  console.log(s1coords);

  //  lets log the scroll coords also to the console: this is logged by the global window object as pageXOffset and pageYOffset

  console.log(
    'Scroll co-ordinates for (x and y): ',
    window.pageXOffset,
    window.pageYOffset
  );

  //  lets scroll the page to the section-features

  // window.scrollTo(
  //   s1coords.x + window.pageXOffset,
  //   s1coords.y + window.pageYOffset
  // );

  // The above works but as said previously these props are deprecated so lets create an options object to pass in to window.scrollTo()

  const options = {
    left: s1coords.x,
    top: s1coords.y,
    behaviour: 'smooth',
  };

  window.scrollTo(options);
});
