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
const headerNavMenuList = document.querySelector('.header-nav-menu-list');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnOpenModal = document.querySelector('.btn--show-modal');
const btnCloseModal = document.querySelector('.btn--close-modal');

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

  // As per the MDN documentation: https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo - we can also pass the coords within an options object and set its behaviour to smooth.

  /*
  
  Notice that we have also added the pageOffsets to the coords recieved from Element.getBoundingClientRect() method and applied it to left and top of the users viewport. The pageOffsets ensure that whereever the viewport is situated relative to the anchor link: once clicked it will scroll to section-features, since it includes the coords of (x, y) on the window object, where y is the coords at the top of the website viewport to the section-features element.

*/

  // const options = {
  //   left: s1coords.x + window.pageXOffset,
  //   top: s1coords.y + window.pageYOffset,
  //   behaviour: 'smooth',
  // };

  // window.scrollTo(options);

  // However the above pageOffsets are now deprecated and so there is a more modern and better way of scrolling to a section that we can utilise.

  sectionFeatures.scrollIntoView({ behavior: 'smooth' });

  // Notice that Element.scrollIntoView: https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView - handles the pageOffsets for us, so there is no need to add them to the coords.
});

// Page Navigation

/*

We have implemented the scroll behaviour on to the learn more link but we also want to implement this feature on to the nav links in the header nav element when the viewport width is >= 768px. 


With this implementation, we will be learning about Event propagation and Event delegation. 

Event propagation is the process of three phases. 

1. capture phase
2. target phase 
3. bubble phase

When an event occurs (e.g. a click event), it is NOT captured at the element where the event occurred but rather at the document root and this event is trickled down to the target element where it actually occurred.

During the capture phase it will note if there are any event listeners attached to any of the target elements ancestors.

Once it reaches the target element, the event will bubble up to the root document element. 

We will be able to see the benefit of this in the following implementation to the navigation links. 

*/

// Note here that we have attached an event listener to the parent element of all the anchor links

headerNavMenuList.addEventListener('click', (e) => {
  e.preventDefault();

  // lets check if the links contain the className
  if (e.target.classList.contains('header-nav-menu-links')) {
    // if it does we can get the id from the href attribute
    const id = e.target.getAttribute('href');

    // and then we can use the id to select the correct section and attach the Element.scrollIntoView() method

    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// Implementing an open modal function to open a modal when Open account buttons are clicked

const openModal = (e) => {
  e.preventDefault();

  // we need to remove hidden className from the modal & overlay elements
  modal.classList.remove('hidden');

  overlay.classList.remove('hidden');
};

// We need to close the modal and overlay too

const closeModal = () => {
  modal.classList.add('hidden');

  overlay.classList.add('hidden');
};

// lets loop through all the buttons that have the className of btn-show-modal/btn-close-modal and attach the event listener to them

// Note that querySelectorAll returns a nodeList, which is an array like structure and therefore we are able to use forEach method

document.querySelectorAll('.btn-show-modal').forEach((btn) => {
  btn.addEventListener('click', openModal);
});

document.querySelectorAll('.btn-close-modal').forEach((btn) => {
  btn.addEventListener('click', closeModal);
});
