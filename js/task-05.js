


const input = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

input.addEventListener('input', onInputChange);

 function onInputChange(event) {

     console.log(event.currentTarget.value)
     nameOutput.textContent = event.currentTarget.value;
}

