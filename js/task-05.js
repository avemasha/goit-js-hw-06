


const input = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

input.addEventListener('input', onInputChange);

 function onInputChange(event) {
    // if (input.value === '') {
    //    nameOutput.innerHTML = 'Anonymous';
    // } else{
    // nameOutput.innerHTML = input.value;
    // }
     console.log(event.currentTarget.value)
     nameOutput.textContent = event.currentTarget.value;
}

