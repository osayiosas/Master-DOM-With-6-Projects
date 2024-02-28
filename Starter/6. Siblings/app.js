
let firstLi = document.querySelector('li');

// console.log(firstLi.parentElement);
// console.log(firstLi.parentElement.parentElement);


// //childNodes

// let ul = document.querySelector('ul');

// console.log(ul.children);

// console.log(ul.children.innerText)


console.log(firstLi.nextElementSibling.textContent);

console.log(firstLi.nextElementSibling.nextElementSibling.textContent);

console.log(firstLi.nextElementSibling.nextElementSibling.nextElementSibling.textContent);



// //previousSibling

let fourthLi = document.querySelector('.fourth');

console.log(fourthLi.previousElementSibling)

console.log(fourthLi.previousElementSibling.textContent);