function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector('[type="number"]')
const createBtn = document.querySelector("[data-create]")
const destroyBtn = document.querySelector("[data-destroy]")

const boxesContainer = document.querySelector("#boxes")

boxesContainer.style.display = 'flex';
boxesContainer.style.marginTop = '50px';
boxesContainer.style.alignItems = 'center';

let amount = null;

input.addEventListener("input", (event) => {
  amount = event.currentTarget.value;
});
createBtn.addEventListener("click", () => {
  console.log(createBoxes(amount));
});


function createBoxes(amount) {
  let width = 30;
  let height = 30;
  for (let i = 0; i < amount; i += 1) {
    function getRandomHexColor() {
      return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }
    const color = getRandomHexColor();

    const newDiv = document.createElement("div");
      newDiv.style.width = `${width}px`;
    width += 10;
    newDiv.style.height = `${height}px`;
    height += 10;
    newDiv.style.backgroundColor = `${color}`;
    newDiv.style.marginRight = '10px'
    newDiv.textContent = `${color}`;
    newDiv.style.display = "flex";
    newDiv.style.justifyContent = "center";
    newDiv.style.alignItems = "center";
    newDiv.style.fontSize = "10px";

    boxesContainer.append(newDiv);

    destroyBtn.addEventListener('click', destroyBoxes);

    function destroyBoxes(){
      newDiv.remove();
    };
}


}

