// ------------------------------------
// createElement()
// appendChild()
// append()
// prepend()
// insertBefore()

/* insertAdjacentElement(
    'beforebegin'
    'afterend'
    'beforeend'
    'afterend',
    element
) */

// removeChild()
// remove()
// ------------------------------------


// creating element

const h1 = document.createElement('h1')

const body = document.body

h1.textContent = 'Hello World'

h1.classList.add('greet')

h1.style.color = 'red'

console.log(h1.textContent)




//appendChild

body.appendChild(h1)



//append

const ul = document.querySelector('ul')

const newLi = document.createElement('li');

newLi.innerText = 'i am new li'

const firstLi = document.querySelector('li');

//seletor insertebefore

ul.insertBefore(newLi, firstLi)


//insertAdjacentElement 


const firstP = document.querySelector('p')
const i =document.createElement('i')

i.innerText = 'i am italic'

i.style.color = 'green'

firstP.insertAdjacentElement('beforebegin', i)
firstP.insertAdjacentElement("afterbegin", i);
firstP.insertAdjacentElement("beforeend", i);



//prepend and append 


let section = document.querySelector('section')

let p = document.createElement('p')
p.innerText = 'i am italic and so cool'
p.style.color = 'blue'


const h4 = document.createElement('h4') 

h4.innerText = 'idiaghe osaigbovo'
h4.style.color = 'brown'

section.prepend(h4)


section.append(p)



const newList = document.querySelector('.new-list')

const fourth = document.querySelector('.fourth')


newList.removeChild(fourth)

// newList.remove()
