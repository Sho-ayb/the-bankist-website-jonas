import '../scss/style.scss';
import images from '../assets/img/logo.png';

console.log('Webpack is serving!');
console.log(images);
// console.log(
//   `Testing if babel works by using a template literal because es5 does not support template literals.If babel is transpiling correctly than this statement will be in double quotes instead.`
// );

console.log(`I am testing if this template literal works with prettier`); // there was no error as the above with prettier

console.log(
  `Testing if babel works by using a template literal because es5 does not support template literals. 
  If babel is transpiling correct than this statement will in double quotes during build`
);
