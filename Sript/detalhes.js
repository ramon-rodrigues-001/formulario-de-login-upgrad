// Configurando da visibilidade da senha
const visibility = document.querySelector('span#visibility')
const input = document.querySelector('input#isenha')

let check = 'ON'
function visivel() {
    if (check == 'ON') {
        input.type = "text"
        visibility.innerHTML = "Visibility"
        check = 'OFF'
    }
    else if (check == 'OFF') {
        input.type = "password"
        visibility.innerHTML = "Visibility_off"
        check = 'ON'
    }
}

visibility.addEventListener( 'click', visivel )




// Aviso que não tem back-end
const esqueceu_a_senha = document.querySelector('a#esqueceu')

function esqueceu() {
    return alert('Este site ainda não tem Back-End')
}

esqueceu_a_senha.addEventListener( 'click', esqueceu )




// Configuração dos inputs que muda de cor
let input_email = document.querySelector('input#iemail')
let input_senha = document.querySelector('input#isenha')

function email() {
    input_email.style.backgroundColor = "white"
}
function senha() {
    input_senha.style.backgroundColor = "white"
}

input_email.addEventListener('click', email )
input_senha.addEventListener('click', senha )