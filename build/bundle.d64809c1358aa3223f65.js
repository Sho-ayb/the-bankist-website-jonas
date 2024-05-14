/******/(()=>{// webpackBootstrap
/******/"use strict";
/******/ // The require scope
/******/var e={
/******/p:"./"};
/******/
/************************************************************************/
/******/ /* webpack/runtime/publicPath */
/******/ // CONCATENATED MODULE: ./src/assets/img/logo.png
e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p;// CONCATENATED MODULE: ./src/js/index.js
function t(e,t){return function(e){if(Array.isArray(e))return e}
// Images
// Icons
(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,i,c=[],s=!0,l=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=a.call(n)).done)&&(c.push(r.value),c.length!==t);s=!0);}catch(e){l=!0,o=e}finally{try{if(!s&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(l)throw o}}return c}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}console.log("Webpack is serving!");
// Selecting elements on page
var r=document.getElementById("btnOpen"),o=document.getElementById("btnClose"),a=document.querySelector(".nav-wrapper"),i=document.querySelector(".header-cta-learnmore"),c=document.getElementById("section-features"),s=document.querySelector(".header-nav-menu-list"),l=document.querySelector(".modal"),d=document.querySelector(".overlay"),u=document.querySelectorAll(".btn-show-modal"),f=document.querySelectorAll(".btn-close-modal"),v=document.querySelector(".header-nav"),m=document.querySelectorAll(".operations-tab"),y=document.querySelector(".operations-tabs"),g=document.querySelectorAll(".operations-content"),p=document.querySelector(".header"),h=document.querySelectorAll(".section"),b=document.querySelectorAll(".features-img"),L=document.querySelectorAll(".slide"),S=document.querySelector(".slider-btn--right"),E=document.querySelector(".slider-btn--left"),w=document.querySelector(".indicators");r.addEventListener("click",(function(){"false"===r.getAttribute("aria-expanded")&&window.getComputedStyle(a).getPropertyValue("transform").includes("matrix(1, 0, 0, 1, -")&&(a.style.transform="translateX(0%)",r.setAttribute("aria-expanded","true"),o.setAttribute("aria-expanded","true"))})),o.addEventListener("click",(function(){"true"===o.getAttribute("aria-expanded")&&window.getComputedStyle(a).getPropertyValue("transform").includes("matrix(1, 0, 0, 1, 0")&&(a.style.transform="translateX(-100%)",r.setAttribute("aria-expanded","false"),o.setAttribute("aria-expanded","false"))}));
// Learn more anchor link should appear when the viewport is >= 768px width
var A=function(){window.visualViewport.width>=768?i.classList.remove("hidden"):i.classList.add("hidden")};
// Invoking the function here so that the anchor link will appear if the viewport width is >= 768px in the first instance.
A(),
// Attaching an event listener so that the anchor link can be hidden when the viewport width is < 768px.
window.addEventListener("resize",A),
// Implementing smooth scrolling to section-features
/*

To begin with: we will get the x and y coords using getBoundingClientRect() method, this provides us with the x and y coords of an element that is positioned on the page.


We can then determine the x and y position plus the pageXOffset and pageYOffset to scroll the position of the page to the section-features.

We will also a latest and better implementation using Element.scrollIntoView() method instead. This is because the above properties are now deprecated.


*/
i.addEventListener("click",(function(e){e.preventDefault();var t=c.getBoundingClientRect();
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
c.scrollIntoView({behavior:"smooth"})}));
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
var q=function(e){e.preventDefault(),
// we need to remove hidden className from the modal & overlay elements
l.classList.remove("hidden"),d.classList.remove("hidden")},k=function(){l.classList.add("hidden"),d.classList.add("hidden")};
// We need to close the modal and overlay too
// Note here that we have attached an event listener to the parent element of all the anchor links
s.addEventListener("click",(function(e){
// lets check if the links contain the className
if(e.preventDefault(),e.target.classList.contains("header-nav-menu-links")){
// if it does we can get the id from the href attribute
// but we don't want to select the href of the button anchor link since this should open the modal instead
var t=e.target.getAttribute("href");t&&"#"!==t?
// and then we can use the id to select the correct section and attach the Element.scrollIntoView() method
document.querySelector(t).scrollIntoView({behavior:"smooth"}):q(e)}})),
// lets loop through all the buttons that have the className of btn-show-modal/btn-close-modal and attach the event listener to them
// Note that querySelectorAll returns a nodeList, which is an array like structure and therefore we are able to use forEach method
u.forEach((function(e){e.addEventListener("click",q)})),f.forEach((function(e){e.addEventListener("click",k)}));
// Implementing changing the opacity level when the nav links in the nav is hovered over
// lets create a function to pass in the event and the opacity value
var I=function(e,t){
// we should target only the anchor links that have a specific class
if(e.target.classList.contains("header-nav-menu-links")){
// capture the target to a variable
var n=e.target,r=e.target.closest(".header-nav-menu-list").querySelectorAll(".header-nav-menu-links"),o=e.target.closest(".header-nav").querySelector(".logo");
// to get the specific effect we want, we need to target the siblings of target element by traversing up the dom tree
// loop through the siblings and change the opacity
r.forEach((function(e){e!==n&&(e.style.opacity=t)})),o.style.opacity=t}};
// Adding an event listener to the nav element
v.addEventListener("mouseover",(function(e){I(e,.5)})),v.addEventListener("mouseout",(function(e){I(e,1)}));
// Making the header-nav sticky
/*

In this section, we will be implementing the navigation menu to be sticky when the header intersects with the header-nav element. To do this we are going to use the intersectionObserver API: https://www.w3.org/TR/intersection-observer/

*/
//  Lets create a function here that takes in an argument which is returned as an entry object as an array like object.
var x=v.getBoundingClientRect().height,O={root:null,rootMargin:"-".concat(x,"px"),threshold:0};
// Before creating the options object to pass in to intersection observer, we need to get the height of the header-nav element as the value for rootMargin so that the observer will know when the header-nav no longer intersects with the header element.
new IntersectionObserver((function(e){t(e,1)[0].isIntersecting?v.classList.remove("sticky"):v.classList.add("sticky")}),O).observe(p);
// Hiding the sections until the users viewport reaches the section - to do this we will also be using intersection observer api. Note that we use entry.target to target the actual element that meets the intersection threshold of 15%, this is so that the class section-hidden is not removed from all the sections at once but only the section the meets the intersection.
var j=new IntersectionObserver((function(e,n){var r=t(e,1)[0];r.isIntersecting&&(r.isIntersecting&&r.target.classList.remove("section-hidden"),n.unobserve(r.target))}),{root:null,threshold:.15});
// we need to loop through all the section elements and apply the sectionObserver
h.forEach((function(e){j.observe(e),e.classList.add("section-hidden")}));
// Implementing a lazy loading of images for the features section
var C=new IntersectionObserver((function(e,n){var r=t(e,1)[0];r.isIntersecting&&(r.isIntersecting&&(r.target.src=r.target.dataset.src,
// An event listener on the entry.target to watch for a load and remove the className lazy-img, which applies a filter of blur
r.target.addEventListener("load",(function(){r.target.classList.remove("lazy-img")}))),n.unobserve(r.target))}),{root:null,threshold:.5,rootMargin:"200px"});
// Intersection options
// Looping through all images and attaching the observer
b.forEach((function(e){C.observe(e),e.classList.add("lazy-img")})),
// Building a tabbed component
// Using Event delegation we can target element clicked on and add the active class to it whilst also removing it from the current active tab
y.addEventListener("click",(function(e){var t=e.target.closest(".operations-tab");
// a guard clause here to avoid recieving a null when the user clicks anywhere other than the tab
t&&(
// remove active class
m.forEach((function(e){return e.classList.remove("operations-tab--active")})),
// add active class to clicked tab
t.classList.add("operations-tab--active"),
// remove active class from content
g.forEach((function(e){return e.classList.remove("operations-content--active")})),
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
var B,V,M,X,z,D;
// invoking the above function
B=0,V=L.length-1,M=function(e){var t;
// removing the active class on all the indicators first
document.querySelectorAll(".indicators-dot").forEach((function(e){e.classList.remove("indicators-dot--active")})),
// adding the active class to the active dot - using optional chaining ?. to check if element is null before adding the class
null===(t=document.querySelector('.indicators-dot[data-slide="'.concat(e,'"]')))||void 0===t||t.classList.add("indicators-dot--active")},z=function(){
// moves slide to the right
B===V?B=0:B+=1,X(B),M(B)},D=function(){
// moves slide to the left
0===B?B=V:B-=1,X(B),M(B)},(X=function(e){L.forEach((function(t,n){t.style.transform="translateX(".concat(100*(n-e),"%)")}))})(0),L.forEach((function(e,t){w.insertAdjacentHTML("beforeend",'<button class="indicators-dot" data-slide='.concat(t,">"))})),M(0),
// the event listeners on the left and right buttons
E.addEventListener("click",D),S.addEventListener("click",z),
// Adding event listener to keydown
document.addEventListener("keydown",(function(e){"ArrowLeft"===e.key&&D(),"ArrowRight"===e.key&&z()})),
// Adding event listener to indicators
w.addEventListener("click",(function(e){if(e.target.classList.contains("indicators-dot")){var t=e.target.dataset.slide;X(t),M(t)}}))})
/******/();
//# sourceMappingURL=bundle.d64809c1358aa3223f65.js.map