/*
1. Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
2. Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
3. Оновлюй інтерфейс новим значенням змінної counterValue.*/


const buttonDecrement = document.querySelector("[data-action='decrement']");
const buttonIncrement = document.querySelector("[data-action='increment']");
const value = document.querySelector("#value");

let counterValue = 0;


const increment = () => {
    counterValue += 1;

    value.textContent = counterValue;
};

const decrement = () => {
    counterValue -= 1;

    value.textContent = counterValue;
};

buttonIncrement.addEventListener("click", increment);
buttonDecrement.addEventListener("click", decrement);