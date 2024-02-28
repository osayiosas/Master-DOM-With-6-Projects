// href
// value
// type


const a = document.querySelector('a')

const input = document.querySelector('input')


console.log(a)

console.log(input)
console.log(input.value)
console.log(input.type);

a.href = 'https://www.google.com';
console.log(a.href)



// console.log((input.type = 'checkbox'));

// console.log((input.value = 'hello'));
// console.log((input.type = 'password'))

// console.log((input.type = "palceholder"))

// getAttribute(attrName)
console.log(a.getAttribute('href'))

console.log(input.getAttribute('value'))

console.log(input.getAttribute('type'))

// setAttribute(attrName, value)

console.log(input.setAttribute('palceholder', 'value'));

input.setAttribute('type', 'value');
