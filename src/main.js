const buttons = document.getElementsByClassName('button')
const buttonClean = document.getElementById('clean')
const buttonApaga1 = document.getElementById('apaga1')
const buttonIgual = document.getElementById('igual')
console.log(buttonClean)

for (let i = 0; i < buttons.length; i++) {
    const buttonAtual = buttons[i]
    buttonAtual.addEventListener('click', (e) => {
        if (buttonAtual == buttonClean) {
            clean()
        }else if(buttonAtual == buttonApaga1){
            apaga1()
        } else if(buttonAtual == buttonIgual){
            calcular()
          }else {
            const numeroButton = e.target.textContent
            const number = document.getElementById('resultado').innerText
            document.getElementById('resultado').innerText = number + numeroButton
        }

    })
}


function clean() {
    document.getElementById('resultado').innerText = ""
}

function apaga1(){
    const resultado = document.getElementById('resultado').innerText
    document.getElementById('resultado').innerText = resultado.substring(0, resultado.length -1)
}

function calcular(){
    const resultado = document.getElementById('resultado').innerText
    if(resultado){
        document.getElementById('resultado').innerText = eval(resultado)
    } else {
        document.getElementById('resultado').innerText = 'Nada pra calcular'
    }
}