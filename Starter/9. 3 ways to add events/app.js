// ----------- BAD WAY-----------

const secondBtn = document.querySelector(".second-btn");

secondBtn.onclick = function () {
    console.log("second-btn clicked");
};


// ----------- GREAT WAY-----------


const best = document.querySelector(".best");

// function greetings() {
//     console.log("Hello, world!");
// }

best.addEventListener("click", () => {
    console.log("Hello, world!");
})


// ----------- Event (e) Object -----------


// const para = document.querySelector(".para");

// para.addEventListener("click", (e) => { 

//     console.log(e)

// });

const form = document.querySelector("form");  

const input = document.querySelector("input");


form.addEventListener("submit", (e) => {
    event.preventDefault();
    console.log(input.value)
});