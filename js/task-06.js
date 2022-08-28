
const inputVal = document.getElementById("validation-input");

const totalLenght = inputVal.getAttribute("data-length");


inputVal.addEventListener("blur", chekupOnBlur);

function chekupOnBlur (event) {
    if (inputVal.value.length !== totalLenght && inputVal.value.length !== 0) {
    inputVal.classList.add("invalid");
  }
 else if (inputVal.value.length === totalLenght) {
    inputVal.classList.add("valid");
    inputVal.classList.remove("invalid");
  }
 else  {
    inputVal.classList.remove("valid");
    inputVal.classList.remove("invalid");
  }

}
