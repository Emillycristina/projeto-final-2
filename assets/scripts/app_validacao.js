import {valida} from './script.js'

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
    input.addEventListener('blur', (evento) => {
        valida(evento.target);
    });
});