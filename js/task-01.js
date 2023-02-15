const listCategories = document.querySelector("#categories");
const liClasses = listCategories.querySelectorAll(".item");
console.log("Number of categories:", liWithClasses.length);
for (let liWithClass of liWithClasses) {
  console.log("Category:", liClass.firstElementChild.textContent);
  console.log("Elements:", liClass.lastElementChild.children.length);
}

/*const listCategories = document.querySelector("#categories");
const liWithClasses = listCategories.querySelectorAll(".item");
console.log("Number of categories:", liWithClasses.length);
for (let liWithClass of liWithClasses) {
  console.log("Category:", liWithClass.firstElementChild.textContent);
  console.log("Elements:", liWithClass.lastElementChild.children.length);
}*/

/*const animalName = document.querySelectorAll("h2");
console.log(`Category: ${animalName[0].textContent}`);
const animalItem = document.querySelectorAll("li.item");
const animalNamesFirst = animalItem[0].querySelectorAll("li");
console.log(`Elements: ${animalNamesFirst.length}`);
console.log(`Category: ${animalName[1].textContent}`);
const animalNamesSecond = animalItem[1].querySelectorAll("li");
console.log(`Elements: ${animalNamesSecond.length}`);
console.log(`Category: ${animalName[2].textContent}`);
const animalNamesThird = animalItem[2].querySelectorAll("li");
console.log(`Elements: ${animalNamesThird.length}`);*/
