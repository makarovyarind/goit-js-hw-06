 const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const list = document.querySelector("#ingredients");
const listIngredients = ingredients.map(ingredient => {
    const liEl = document.createElement('li');
    liEl.textContent = ingredient;
    liEl.className = "item";
    return liEl;
});

list.append(...listIngredients);

