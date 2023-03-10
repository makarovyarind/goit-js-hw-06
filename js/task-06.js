/*Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), 
перевіряє його вміст щодо правильної кількості введених символів.

1. Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
2. Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.

Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.*/

const input = document.querySelector("#validation-input");
const inputLength = Number(input.getAttribute('data-length'));

input.addEventListener('blur', onInput);

function onInput(event) {
    input.classList.remove("valid", "invalid");
    event.target.value.length === inputLength ? input.classList.add("valid") : input.classList.add("invalid");
}