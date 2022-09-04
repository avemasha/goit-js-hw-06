


const input = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

input.addEventListener('input', onInputChange);

 function onInputChange(event) {

       if (event.currentTarget.value === "") {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = event.currentTarget.value;
  }
}

