

const inputControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

inputControl.addEventListener("input", textSizeChanger);

function textSizeChanger(evt) {
  evt.preventDefault()
  text.style.fontSize = `${inputControl.value}px`;

}