/******/(()=>{// webpackBootstrap
/******/"use strict";
/******/ // The require scope
/******/var e={
/******/p:"/build/"};
/******/
/************************************************************************/
/******/ /* webpack/runtime/publicPath */
/******/ // CONCATENATED MODULE: ./src/assets/img/logo.png
e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p;// CONCATENATED MODULE: ./src/js/index.js
function t(e,t){return function(e){if(Array.isArray(e))return e}
// Images
// Icons
(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,i,s=[],c=!0,l=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=a.call(r)).done)&&(s.push(n.value),s.length!==t);c=!0);}catch(e){l=!0,o=e}finally{try{if(!c&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(l)throw o}}return s}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}console.log("Webpack is serving!");
// Selecting elements on page
var n=document.getElementById("btnOpen"),o=document.getElementById("btnClose"),a=document.querySelector(".nav-wrapper"),i=document.querySelector(".header-cta-learnmore"),s=document.getElementById("section-features"),c=document.querySelector(".header-nav-menu-list"),l=document.querySelector(".modal"),u=document.querySelector(".overlay"),d=document.querySelectorAll(".btn-show-modal"),f=document.querySelectorAll(".btn-close-modal"),v=document.querySelector(".header-nav"),m=document.querySelectorAll(".operations-tab"),p=document.querySelector(".operations-tabs"),y=document.querySelectorAll(".operations-content"),g=document.querySelector(".header"),h=document.querySelectorAll(".section"),b=document.querySelectorAll(".features-img");n.addEventListener("click",(function(){"false"===n.getAttribute("aria-expanded")&&window.getComputedStyle(a).getPropertyValue("transform").includes("matrix(1, 0, 0, 1, -")&&(a.style.transform="translateX(0%)",n.setAttribute("aria-expanded","true"),o.setAttribute("aria-expanded","true"))})),o.addEventListener("click",(function(){"true"===o.getAttribute("aria-expanded")&&window.getComputedStyle(a).getPropertyValue("transform").includes("matrix(1, 0, 0, 1, 0")&&(a.style.transform="translateX(-100%)",n.setAttribute("aria-expanded","false"),o.setAttribute("aria-expanded","false"))}));
// Learn more anchor link should appear when the viewport is >= 768px width
var L=function(){window.visualViewport.width>=768?i.classList.remove("hidden"):i.classList.add("hidden")};
// Invoking the function here so that the anchor link will appear if the viewport width is >= 768px in the first instance.
L(),
// Attaching an event listener so that the anchor link can be hidden when the viewport width is < 768px.
window.addEventListener("resize",L),
// Implementing smooth scrolling to section-features
/*

To begin with: we will get the x and y coords using getBoundingClientRect() method, this provides us with the x and y coords of an element that is positioned on the page.


We can then determine the x and y position plus the pageXOffset and pageYOffset to scroll the position of the page to the section-features.

We will also a latest and better implementation using Element.scrollIntoView() method instead. This is because the above properties are now deprecated.


*/
i.addEventListener("click",(function(e){e.preventDefault();var t=s.getBoundingClientRect();
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
s.scrollIntoView({behavior:"smooth"})}));
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
var S=function(e){e.preventDefault(),
// we need to remove hidden className from the modal & overlay elements
l.classList.remove("hidden"),u.classList.remove("hidden")},w=function(){l.classList.add("hidden"),u.classList.add("hidden")};
// We need to close the modal and overlay too
// Note here that we have attached an event listener to the parent element of all the anchor links
c.addEventListener("click",(function(e){
// lets check if the links contain the className
if(e.preventDefault(),e.target.classList.contains("header-nav-menu-links")){
// if it does we can get the id from the href attribute
// but we don't want to select the href of the button anchor link since this should open the modal instead
var t=e.target.getAttribute("href");t&&"#"!==t?
// and then we can use the id to select the correct section and attach the Element.scrollIntoView() method
document.querySelector(t).scrollIntoView({behavior:"smooth"}):S(e)}})),
// lets loop through all the buttons that have the className of btn-show-modal/btn-close-modal and attach the event listener to them
// Note that querySelectorAll returns a nodeList, which is an array like structure and therefore we are able to use forEach method
d.forEach((function(e){e.addEventListener("click",S)})),f.forEach((function(e){e.addEventListener("click",w)}));
// Implementing changing the opacity level when the nav links in the nav is hovered over
// lets create a function to pass in the event and the opacity value
var E=function(e,t){
// we should target only the anchor links that have a specific class
if(e.target.classList.contains("header-nav-menu-links")){
// capture the target to a variable
var r=e.target,n=e.target.closest(".header-nav-menu-list").querySelectorAll(".header-nav-menu-links"),o=e.target.closest(".header-nav").querySelector(".logo");
// to get the specific effect we want, we need to target the siblings of target element by traversing up the dom tree
// loop through the siblings and change the opacity
n.forEach((function(e){e!==r&&(e.style.opacity=t)})),o.style.opacity=t}};
// Adding an event listener to the nav element
v.addEventListener("mouseover",(function(e){E(e,.5)})),v.addEventListener("mouseout",(function(e){E(e,1)}));
// Making the header-nav sticky
/*

In this section, we will be implementing the navigation menu to be sticky when the header intersects with the header-nav element. To do this we are going to use the intersectionObserver API: https://www.w3.org/TR/intersection-observer/

*/
//  Lets create a function here that takes in an argument which is returned as an entry object as an array like object.
var A=v.getBoundingClientRect().height,q={root:null,rootMargin:"-".concat(A,"px"),threshold:0};
// Before creating the options object to pass in to intersection observer, we need to get the height of the header-nav element as the value for rootMargin so that the observer will know when the header-nav no longer intersects with the header element.
new IntersectionObserver((function(e){t(e,1)[0].isIntersecting?v.classList.remove("sticky"):v.classList.add("sticky")}),q).observe(g);
// Hiding the sections until the users viewport reaches the section - to do this we will also be using intersection observer api. Note that we use entry.target to target the actual element that meets the intersection threshold of 15%, this is so that the class section-hidden is not removed from all the sections at once but only the section the meets the intersection.
var I=new IntersectionObserver((function(e,r){var n=t(e,1)[0];n.isIntersecting&&(n.isIntersecting&&n.target.classList.remove("section-hidden"),r.unobserve(n.target))}),{root:null,threshold:.15});
// we need to loop through all the section elements and apply the sectionObserver
h.forEach((function(e){I.observe(e),e.classList.add("section-hidden")}));
// Implementing a lazy loading of images for the features section
var k=new IntersectionObserver((function(e,r){var n=t(e,1)[0];n.isIntersecting&&(n.isIntersecting&&(n.target.src=n.target.dataset.src,
// An event listener on the entry.target to watch for a load and remove the className lazy-img, which applies a filter of blur
n.target.addEventListener("load",(function(){n.target.classList.remove("lazy-img")}))),r.unobserve(n.target))}),{root:null,threshold:.5,rootMargin:"200px"});
// Intersection options
// Looping through all images and attaching the observer
b.forEach((function(e){k.observe(e),e.classList.add("lazy-img")})),
// Building a tabbed component
// Using Event delegation we can target element clicked on and add the active class to it whilst also removing it from the current active tab
p.addEventListener("click",(function(e){var t=e.target.closest(".operations-tab");
// a guard clause here to avoid recieving a null when the user clicks anywhere other than the tab
t&&(
// remove active class
m.forEach((function(e){return e.classList.remove("operations-tab--active")})),
// add active class to clicked tab
t.classList.add("operations-tab--active"),
// remove active class from content
y.forEach((function(e){return e.classList.remove("operations-content--active")})),
// activate content area - using dataset
document.querySelector(".operations-content--".concat(t.dataset.tab)).classList.add("operations-content--active"))}))})
/******/();
//# sourceMappingURL=bundle.0d554f0933ddd40e0d80.js.map