const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// const ulList = document.querySelector('#ingredients');

// const foodIngredients = ingredients.forEach(ingredient  => {
//   let items = document.createElement("li");
//   items.classList.add('item');
//   items.innerHTML = ingredient;
//   ulList.append(items);
//   parent.append(...items);
// });

// console.log(foodIngredients);

const ulEl = document.querySelector('#ingredients');

const list = ingredients.reduce((str, item) => str + `<li>${item}</li>`, '');


ulEl.innerHTML = list;