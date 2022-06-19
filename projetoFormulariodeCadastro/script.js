function mostrarOcultarSenha(){
    var senha = document.getElementById("senha");
    if (senha.type=="password"){
        senha.type="texto";
    }else{
        senha.type="password";
    }
}