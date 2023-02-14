/*Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення 
в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".*/

const refs = {
    input: document.querySelector('#name-input'),
    span: document.querySelector('#name-output')
};

refs.input.addEventListener('input', inputChange);

function inputChange(event) {
    if (event.currentTarget.value.trim() === '') {
        refs.span.textContent = 'Anonymous';
    } 
     refs.span.textContent = event.currentTarget.value;
}

