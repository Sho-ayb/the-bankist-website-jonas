/******/(()=>{// webpackBootstrap
/******/"use strict";
/******/ // The require scope
/******/var e={
/******/p:"./"};
/******/
/************************************************************************/
/******/ /* webpack/runtime/publicPath */
/******/ // CONCATENATED MODULE: ./src/assets/img/logo.png
e.p,e.p,e.p,e.p,e.p;const t=e.p+"assets/img/digital.4aa19c45525ca0ffe32a.jpg",n=e.p+"assets/img/grow.1dbce71c2269c506218a.jpg",r=e.p+"assets/img/card.b2032a20fc1ab216f19b.jpg";e.p,e.p,e.p,e.p,e.p;// CONCATENATED MODULE: ./src/js/index.js
function o(e,t){return function(e){if(Array.isArray(e))return e}
// Images
// Icons
(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,i,c=[],s=!0,l=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=a.call(n)).done)&&(c.push(r.value),c.length!==t);s=!0);}catch(e){l=!0,o=e}finally{try{if(!s&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(l)throw o}}return c}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}console.log("Webpack is serving!");
// Selecting elements on page
var i=document.getElementById("btnOpen"),c=document.getElementById("btnClose"),s=document.querySelector(".nav-wrapper"),l=document.querySelector(".header-cta-learnmore"),d=document.getElementById("section-features"),u=document.querySelector(".header-nav-menu-list"),f=document.querySelector(".modal"),v=document.querySelector(".overlay"),m=document.querySelectorAll(".btn-show-modal"),g=document.querySelectorAll(".btn-close-modal"),y=document.querySelector(".header-nav"),p=document.querySelectorAll(".operations-tab"),h=document.querySelector(".operations-tabs"),b=document.querySelectorAll(".operations-content"),L=document.querySelector(".header"),S=document.querySelectorAll(".section"),w=document.querySelectorAll(".features-img"),E=document.querySelectorAll(".slide"),A=document.querySelector(".slider-btn--right"),q=document.querySelector(".slider-btn--left"),k=document.querySelector(".indicators");i.addEventListener("click",(function(){"false"===i.getAttribute("aria-expanded")&&window.getComputedStyle(s).getPropertyValue("transform").includes("matrix(1, 0, 0, 1, -")&&(s.style.transform="translateX(0%)",i.setAttribute("aria-expanded","true"),c.setAttribute("aria-expanded","true"))})),c.addEventListener("click",(function(){"true"===c.getAttribute("aria-expanded")&&window.getComputedStyle(s).getPropertyValue("transform").includes("matrix(1, 0, 0, 1, 0")&&(s.style.transform="translateX(-100%)",i.setAttribute("aria-expanded","false"),c.setAttribute("aria-expanded","false"))}));
// Learn more anchor link should appear when the viewport is >= 768px width
var I=function(){window.visualViewport.width>=768?l.classList.remove("hidden"):l.classList.add("hidden")};
// Invoking the function here so that the anchor link will appear if the viewport width is >= 768px in the first instance.
I(),
// Attaching an event listener so that the anchor link can be hidden when the viewport width is < 768px.
window.addEventListener("resize",I),
// Implementing smooth scrolling to section-features
/*

To begin with: we will get the x and y coords using getBoundingClientRect() method, this provides us with the x and y coords of an element that is positioned on the page.


We can then determine the x and y position plus the pageXOffset and pageYOffset to scroll the position of the page to the section-features.

We will also a latest and better implementation using Element.scrollIntoView() method instead. This is because the above properties are now deprecated.


*/
l.addEventListener("click",(function(e){e.preventDefault();var t=d.getBoundingClientRect();
// lets log the coords to the console: we get a DOMRect object
console.log(t),
//  lets log the scroll coords also to the console: this is logged by the global window object as pageXOffset and pageYOffset
console.log("Scroll co-ordinates for (x and y): ",window.pageXOffset,window.pageYOffset),
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
d.scrollIntoView({behavior:"smooth"})}));
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
var j=function(e){e.preventDefault(),
// we need to remove hidden className from the modal & overlay elements
f.classList.remove("hidden"),v.classList.remove("hidden")},x=function(){f.classList.add("hidden"),v.classList.add("hidden")};
// We need to close the modal and overlay too
// Note here that we have attached an event listener to the parent element of all the anchor links
u.addEventListener("click",(function(e){
// lets check if the links contain the className
if(e.preventDefault(),e.target.classList.contains("header-nav-menu-links")){
// if it does we can get the id from the href attribute
// but we don't want to select the href of the button anchor link since this should open the modal instead
var t=e.target.getAttribute("href");t&&"#"!==t?
// and then we can use the id to select the correct section and attach the Element.scrollIntoView() method
document.querySelector(t).scrollIntoView({behavior:"smooth"}):j(e)}})),
// lets loop through all the buttons that have the className of btn-show-modal/btn-close-modal and attach the event listener to them
// Note that querySelectorAll returns a nodeList, which is an array like structure and therefore we are able to use forEach method
m.forEach((function(e){e.addEventListener("click",j)})),g.forEach((function(e){e.addEventListener("click",x)}));
// Implementing changing the opacity level when the nav links in the nav is hovered over
// lets create a function to pass in the event and the opacity value
var O=function(e,t){
// we should target only the anchor links that have a specific class
if(e.target.classList.contains("header-nav-menu-links")){
// capture the target to a variable
var n=e.target,r=e.target.closest(".header-nav-menu-list").querySelectorAll(".header-nav-menu-links"),o=e.target.closest(".header-nav").querySelector(".logo");
// to get the specific effect we want, we need to target the siblings of target element by traversing up the dom tree
// loop through the siblings and change the opacity
r.forEach((function(e){e!==n&&(e.style.opacity=t)})),o.style.opacity=t}};
// Adding an event listener to the nav element
y.addEventListener("mouseover",(function(e){O(e,.5)})),y.addEventListener("mouseout",(function(e){O(e,1)}));
// Making the header-nav sticky
/*

In this section, we will be implementing the navigation menu to be sticky when the header intersects with the header-nav element. To do this we are going to use the intersectionObserver API: https://www.w3.org/TR/intersection-observer/

*/
//  Lets create a function here that takes in an argument which is returned as an entry object as an array like object.
var C=y.getBoundingClientRect().height,B={root:null,rootMargin:"-".concat(C,"px"),threshold:0};
// Before creating the options object to pass in to intersection observer, we need to get the height of the header-nav element as the value for rootMargin so that the observer will know when the header-nav no longer intersects with the header element.
new IntersectionObserver((function(e){o(e,1)[0].isIntersecting?y.classList.remove("sticky"):y.classList.add("sticky")}),B).observe(L);
// Hiding the sections until the users viewport reaches the section - to do this we will also be using intersection observer api. Note that we use entry.target to target the actual element that meets the intersection threshold of 15%, this is so that the class section-hidden is not removed from all the sections at once but only the section the meets the intersection.
var V=new IntersectionObserver((function(e,t){var n=o(e,1)[0];n.isIntersecting&&(n.isIntersecting&&n.target.classList.remove("section-hidden"),t.unobserve(n.target))}),{root:null,threshold:.15});
// we need to loop through all the section elements and apply the sectionObserver
S.forEach((function(e){V.observe(e),e.classList.add("section-hidden")}));
// Implementing a lazy loading of images for the features section
// We have multiple images in the features section that are loaded when the element is intersecting with the viewport. We will use Intersection Observer API to load these images. However for image caching to work with hash value in the url, we added a data-src attribute to the image element but we need to create an object to pass as the img.src value, that matches entry.target.dataset.src value.
// The values are variables that hold the image path and will include a hash value for caching purposes when the app is built in webpack production mode.
var M={"assets/img/digital.jpg":t,"assets/img/grow.jpg":n,"assets/img/card.jpg":r},X=new IntersectionObserver((function(e,t){var n=o(e,1)[0];if(n.isIntersecting){
// we can use bracket notation to get the value of the imageSources object using the entry.target.dataset.src value as the key
var r=M[n.target.dataset.src];n.isIntersecting&&(
// assign the value of the imageSources object to the entry.target.src
n.target.src=r,
// An event listener on the entry.target to watch for a load and remove the className lazy-img, which applies a filter of blur
n.target.addEventListener("load",(function(){n.target.classList.remove("lazy-img")}))),t.unobserve(n.target)}}),{root:null,threshold:.5,rootMargin:"200px"});
// Looping through all images and attaching the observer
w.forEach((function(e){X.observe(e),e.classList.add("lazy-img")})),
// Building a tabbed component
// Using Event delegation we can target element clicked on and add the active class to it whilst also removing it from the current active tab
h.addEventListener("click",(function(e){var t=e.target.closest(".operations-tab");
// a guard clause here to avoid recieving a null when the user clicks anywhere other than the tab
t&&(
// remove active class
p.forEach((function(e){return e.classList.remove("operations-tab--active")})),
// add active class to clicked tab
t.classList.add("operations-tab--active"),
// remove active class from content
b.forEach((function(e){return e.classList.remove("operations-content--active")})),
// activate content area - using dataset
document.querySelector(".operations-content--".concat(t.dataset.tab)).classList.add("operations-content--active"))}));
// Building the slider component
// just so we can see the entire slider
// slider.style.transform = 'scale(0.5)';
// slider.style.overflow = 'hidden';
// // we need to set the initial current slide to zero
// let curSlide = 0;
// // we need to minus by 1 because slides index is zero based 0,1,2
// const maxSlide = slides.length - 1;
/*

-- The code below is working, so let refactor it to helper functions below:

slides.forEach((slide, i) => {
  const tempPara = slide;

  tempPara.style.transform = `translateX(${100 * i}%)`;
});

slideBtnRight.addEventListener('click', () => {
  // check to see if we have reached the max slide

  console.log('current slide: ', curSlide);
  console.log('max slide:', maxSlide);

  if (curSlide === maxSlide) {
    // reset current slide
    curSlide = 0;
  } else {
    // incrementing the current slide index
    curSlide += 1;
  }
  // moves slide to the right

  slides.forEach((slide, i) => {
    console.log('slide index:', i);
    const tempPara = slide;
    tempPara.style.transform = `translateX(${100 * (i - curSlide)}%)`;
  });
});


*/
// if curSlide = 1; then the order is: -100%, 0%, 100%, 200%,
// curSlide = 1; slide index = 0; 100 * (0 - 1 = -1) = -100%
// curSlide = 1; slide index = 1; 100 * (1 - 1 = 0) = 0%
// curSlide = 1; slide index = 2; 100 * (2 - 1 = 1) = 100%
// curSlide = 1; slide index = 3; 100 * (3 - 1 = 2) = 200%
/*

How the above works: each time the button is fired, curSlide is incremented by 1, the iteration takes place on ALL of the slides in the nodeList - which is array like - the expression (i - curSlide) takes precedence and is calcuted, its result is multiplied by 100%. 

Thus; for the first slide in the index, when the button is clicked its translateX value is now -100%, which places the slide element left of the current slide and the current slide is at 0%,  the next slide is at 100%, which places to the right of the current slide and so forth. 


*/
// Refactoring above code in to separate functions and wrapping in to its own function so that we do not polute the global namespace
var z,D,R,P,T,H;
// invoking the above function
z=0,D=E.length-1,R=function(e){var t;
// removing the active class on all the indicators first
document.querySelectorAll(".indicators-dot").forEach((function(e){e.classList.remove("indicators-dot--active")})),
// adding the active class to the active dot - using optional chaining ?. to check if element is null before adding the class
null===(t=document.querySelector('.indicators-dot[data-slide="'.concat(e,'"]')))||void 0===t||t.classList.add("indicators-dot--active")},T=function(){
// moves slide to the right
z===D?z=0:z+=1,P(z),R(z)},H=function(){
// moves slide to the left
0===z?z=D:z-=1,P(z),R(z)},(P=function(e){E.forEach((function(t,n){t.style.transform="translateX(".concat(100*(n-e),"%)")}))})(0),E.forEach((function(e,t){k.insertAdjacentHTML("beforeend",'<button class="indicators-dot" data-slide='.concat(t,">"))})),R(0),
// the event listeners on the left and right buttons
q.addEventListener("click",H),A.addEventListener("click",T),
// Adding event listener to keydown
document.addEventListener("keydown",(function(e){"ArrowLeft"===e.key&&H(),"ArrowRight"===e.key&&T()})),
// Adding event listener to indicators
k.addEventListener("click",(function(e){if(e.target.classList.contains("indicators-dot")){var t=e.target.dataset.slide;P(t),R(t)}}))})
/******/();
//# sourceMappingURL=bundle.e5043aa8e4d2b6791151.js.map