// https://www.w3schools.com/jsref/obj_keyboardevent.asp
const input = document.querySelector("input");


input.addEventListener('keypress', () => {
    console.log('key press')
})

input.addEventListener("keyup", () => {
  console.log("keyup");
});

input.addEventListener("keydown", () => {
  console.log("keydown");
});


//useful ways for event 

input.addEventListener('keypress', e => {
  //consle.log(e.charCode)
  console.log(e.code);
  console.log(e.ctrlKey);
  console.log(e.key);
  console.log(e.shiftKey);
})