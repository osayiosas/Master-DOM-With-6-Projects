// createElement()
// append()


const h1 = document.createElement('h1');

const body = document.body;
h1.innerText = 'Hello World';
h1.classList.add('greet');
h1.style.color = 'red';

body.appendChild(h1)




// prepend()

const p = document.createElement('p');

p.innerText = 'I am a new paragraph';

body.prepend(p);

/* insertAdjacentElement(
    'beforebegin'
    'afterend'
    'beforeend'
    'afterend',
    element
) */

const h2 = document.createElement('h2');

h2.innerText = 'I am a new h2';

h1.insertAdjacentElement('afterend', h2);

h1.insertAdjacentElement('beforebegin', h2);

h1.insertAdjacentElement('beforeend', h2);

// removeChild()

const ul = document.querySelector('ul');

// remove()
