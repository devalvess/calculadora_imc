/* Aqui iremos buscar os elementos que vamos utilizar. Atraves de seletores,
irei atribuir elementos a variavel no quais elas passam a ser elementos do html no js
*/

const botao = document.getElementById('botao');

// se atentar se o que eu quero é o elemento ou ó valor dele.(para acessar valor ex: nome.value)
//.value normalmente é mais utilizado para inputs.
// nome.value = 'Edilson'; isso vai escrever no campo input no caso o nome Edilson.
function imc () {
    const nome = document.getElementById('nome').value // trabalhar com essas variaveis no escopo da função,pois elas só serão utilizadas aqui.
    const altura = document.getElementById('altura').value
    const peso = document.getElementById('peso').value
    const resultado = document.getElementById('resultado');

    if( nome !== '' && altura !== '' && peso !== '') {

        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = ''

        if (valorIMC < 18.5) {
            classificacao = 'abaixo do peso';
        } else if (valorIMC < 25) {
            classificacao = 'com peso ideal, parabens';
        } else if (valorIMC < 30) {
            classificacao = 'levemente acima do peso';
        } else if (valorIMC < 35) {
            classificacao = 'com obesidade grau 1 ';
        } else if (valorIMC < 40) {
            classificacao = 'com obesidade grau 2';
        } else {
            classificacao = 'com obesidade grau 3. Cuidado'
        } 

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e voce está ${classificacao}`;
        
    } else {
        resultado.textContent = 'Preencha todos os campos';
    }
}

// para acessar o conteudo de uma div digita o nome.textContent = 

botao.addEventListener('click', imc); 
// o metodo desse objeto, escutar quando alguem clica, quando alguem clicar
// voce vai pegar e vai exercutar uma função chamada IMC.
