/*function mostrarOcultarSenha(){
    var senha = document.getElementById("senha");
    if (senha.type=="password"){
        senha.type="texto";
    }else{
        senha.type="password";
    }
}*/

/*const form = document.getElementById('form');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const telefone = document.getElementById('telefone');*/

let botao = document.querySelector('.fa-eye')
botao.addEventListener (click,()=>{
    let inputSenha = document.querySelector('#senha')
    if(inputSenha.getAttribute('type')== 'passaword'){
        inputSenha.setAttribute('type', text)
} else{
    inputSenha.setAttribute('type', 'password')
}


}

  