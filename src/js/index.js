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
const btnOpenModal = document.querySelectorAll('.btn-show-modal');
const btnCloseModal = document.querySelectorAll('.btn-close-modal');
const headerNav = document.querySelector('.header-nav');
const tabs = document.querySelectorAll('.operations-tab');
const tabContainer = document.querySelector('.operations-tabs');
const tabsContent = document.querySelectorAll('.operations-content');
const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');

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

// Note here that we have attached an event listener to the parent element of all the anchor links

headerNavMenuList.addEventListener('click', (e) => {
  e.preventDefault();

  // lets check if the links contain the className
  if (e.target.classList.contains('header-nav-menu-links')) {
    // if it does we can get the id from the href attribute
    // but we don't want to select the href of the button anchor link since this should open the modal instead
    const id = e.target.getAttribute('href');

    if (id && id !== '#') {
      // and then we can use the id to select the correct section and attach the Element.scrollIntoView() method

      document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    } else {
      openModal(e);
    }
  }
});

// lets loop through all the buttons that have the className of btn-show-modal/btn-close-modal and attach the event listener to them

// Note that querySelectorAll returns a nodeList, which is an array like structure and therefore we are able to use forEach method

btnOpenModal.forEach((btn) => {
  btn.addEventListener('click', openModal);
});

btnCloseModal.forEach((btn) => {
  btn.addEventListener('click', closeModal);
});

// Implementing changing the opacity level when the nav links in the nav is hovered over

// lets create a function to pass in the event and the opacity value

const navStyle = (e, opacity) => {
  // we should target only the anchor links that have a specific class

  if (e.target.classList.contains('header-nav-menu-links')) {
    // capture the target to a variable
    const link = e.target;

    // to get the specific effect we want, we need to target the siblings of target element by traversing up the dom tree
    const siblings = e.target
      .closest('.header-nav-menu-list')
      .querySelectorAll('.header-nav-menu-links');

    const logo = e.target.closest('.header-nav').querySelector('.logo');

    // loop through the siblings and change the opacity
    siblings.forEach((el) => {
      if (el !== link) {
        // Eslint requires param reassigned
        const tempEl = el;
        tempEl.style.opacity = opacity;
      }
    });

    logo.style.opacity = opacity;
  }
};

// Adding an event listener to the nav element

headerNav.addEventListener('mouseover', (e) => {
  navStyle(e, 0.5);
});

headerNav.addEventListener('mouseout', (e) => {
  navStyle(e, 1);
});

// Making the header-nav sticky

/*

In this section, we will be implementing the navigation menu to be sticky when the header intersects with the header-nav element. To do this we are going to use the intersectionObserver API: https://www.w3.org/TR/intersection-observer/

*/

//  Lets create a function here that takes in an argument which is returned as an entry object as an array like object.

const navStickyCb = (entries) => {
  // destructure entry from entries array like object

  const [entry] = entries;

  if (!entry.isIntersecting) {
    headerNav.classList.add('sticky');
  } else {
    headerNav.classList.remove('sticky');
  }
};

// Before creating the options object to pass in to intersection observer, we need to get the height of the header-nav element as the value for rootMargin so that the observer will know when the header-nav no longer intersects with the header element.

const headerNavHeight = headerNav.getBoundingClientRect().height;

// Note that the threshold prop is zero, this tells the observer that the threshold for making the header-nav sticky will be when it is no longer intersecting at all.

const headerOptions = {
  root: null,
  rootMargin: `-${headerNavHeight}px`,
  threshold: 0,
};

// lets create the new observer
const headerObserver = new IntersectionObserver(navStickyCb, headerOptions);

headerObserver.observe(header);

// Hiding the sections until the users viewport reaches the section - to do this we will also be using intersection observer api

const revealSection = (entries, observer) => {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  if (entry.isIntersecting) {
    entry.target.classList.remove('section-hidden');

    observer.unobserve(entry.target);
  }
};

const sectionOptions = {
  root: null,
  threshold: 0.15,
};

const sectionObserver = new IntersectionObserver(revealSection, sectionOptions);

// we need to loop through all the section elements and apply the sectionObserver

allSections.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add('section-hidden');
});

// Building a tabbed component

// Using Event delegation we can target element clicked on and add the active class to it whilst also removing it from the current active tab

tabContainer.addEventListener('click', (e) => {
  const clicked = e.target.closest('.operations-tab');

  // a guard clause here to avoid recieving a null when the user clicks anywhere other than the tab

  if (!clicked) return;

  // remove active class

  tabs.forEach((tab) => tab.classList.remove('operations-tab--active'));

  // add active class to clicked tab

  clicked.classList.add('operations-tab--active');

  // remove active class from content

  tabsContent.forEach((content) =>
    content.classList.remove('operations-content--active')
  );

  // activate content area - using dataset

  document
    .querySelector(`.operations-content--${clicked.dataset.tab}`)
    .classList.add('operations-content--active');
});
