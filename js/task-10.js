/*Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку 
  Створити, після чого рендериться колекція. 
Натисненням на кнопку Очистити, колекція елементів очищається

Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

1. Розміри найпершого <div> - 30px на 30px.
2. Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
3. Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.*/

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const create = document.querySelector("[data-create]");
const destroy = document.querySelector("[data-destroy]");
const boxesEl = document.querySelector("#boxes");

create.addEventListener('click', takeAmount);
destroy.addEventListener('click', destroyBoxes);

function takeAmount() {
  let amount = document.querySelector("#controls input").value;
  createBoxes(amount);
}

function createBoxes(amount) {
  const basicDivSize = 30;
  const fragment = document.createDocumentFragment();
  for (let i = 0; i <= amount; i += 1) {
    const divEl = document.createElement("div");
    const divSize = basicDivSize + i * 10;
    divEl.style.cssText = `width: ${divSize}px; height: ${divSize}px;`;
    divEl.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(divEl)
  }
boxesEl.append(fragment);
  
}

function destroyBoxes() {
  boxesEl.innerHTML = "";
}