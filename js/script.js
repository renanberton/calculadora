/* Seletores */
const inputs = document.getElementById('inputResultado');
const numeros = document.querySelectorAll('.numero');
const operadores = document.querySelectorAll('.operador');
const calcular = document.getElementById('calcular');
const limpar = document.querySelectorAll('.numero:last-child');

let jaCalculou;

/* Evento para pegar os valores dos números e botar no input */
numeros.forEach((number) => {
    number.addEventListener('click', () => {
        /* Se o numero não for um = irá add o número ao input
        Para evitar de botar o = no input pois dá erro */
        if(number.innerHTML !== '='){
            inputs.value += number.innerHTML;
        }
        /* E caso já tiver sido feito um cálculo e o usuário clicar novamente no numero
        Ele irá zerar o input para uma nova operação */
        if(jaCalculou) {
            inputs.value = '';
            jaCalculou = false;
            inputs.value += number.innerHTML;
        }
        if(number.innerHTML == 'Limpar') {
            inputs.value = '';
        }
    })
})

/* Evento para pegar os valores dos operadores e botar no input */
operadores.forEach((operador) => {
    operador.addEventListener('click', () => {
        inputs.value += operador.innerHTML;
    })
})

/* Evento que irá calcular os números e operadores inseridos no input */
calcular.addEventListener('click', () => {
    let resultado = inputs.value;
    inputs.value = eval(inputs.value).toFixed(1);
    /* Variável que será true ao terminar o cálculo */
    jaCalculou = true;
})

limpar.addEventListener('click', () => {
    inputs.value = '';
})