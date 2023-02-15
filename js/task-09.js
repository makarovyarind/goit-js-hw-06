/*Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і 
виводить значення кольору в span.color.
Для генерування випадкового кольору використовуй функцію getRandomHexColor.*/

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonEl = document.querySelector(".change-color");
const textEl = document.querySelector(".color");



buttonEl.addEventListener('click', () => {
  textEl.textContent = getRandomHexColor(); 
  document.body.style.backgroundColor = textEl.textContent;
  
  
});