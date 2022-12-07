
const botao = document.getElementById('btn');

function mc() {

    const colaborador = document.getElementById('colaborador').value;
    const producao = document.getElementById('producao').value;
    const horas = document.getElementById('hora').value;
    const resultado = document.getElementById('resultado');

    if(colaborador !== '' && producao !== '' && horas !== '') {

        const vlr = (producao / horas)

        let guia ='';

        if( vlr > 1) {
            guia = 'bom'
        } else if ( vlr <= 5) {
            guia = 'excelente'
        } else {
            guia ='podemos verificar'
        }
          resultado.textContent = `sua produção foi de ${vlr} e seu ${guia}`
    } else {
        resultado.textContent = "Prencher todos os campos"
    }
}


botao,addEventListener('click', mc)
