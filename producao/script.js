
const botao = document.getElementById('botao'); // unica varivavel que trabalho global

function imc() {

    const colaborador = document.getElementById('colaborador').value;
    const producao = document.getElementById('producao').value;
    const hora = document.getElementById('hora').value;
    const resultado = document.getElementById('resultado');

    if(colaborador !== '' && producao !== '' && hora !== '') {
        
        const produzida = producao / hora
        
        let prod = ''

        if(produzida >= 300) {
            prod = 'sua produção foi excelente'
        } else if (produzida < 300) {
            prod = 'sua produção foi abaixo da media'
        } else if (produzida < 200) {
            prod = 'voce precisa melhorar'
        } else {
            prod = 'Funcionario não foi ao trabalho'
        }

        resultado.textContent = ` ${produzida.toFixed(1)} peças hora e ${prod}`

    } else {
        resultado.textContent = 'Preencher todos os CAMPOS'
    }
    
}

botao.addEventListener('click', imc)


