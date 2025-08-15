//// Script FIle ////
function logar(){
    user = document.querySelector("#user-input-login").value
    password = document.querySelector("#user-input-password").value
    sessionStorage.setItem("usuario", user)
    sessionStorage.setItem("senha", password)

    window.location.href = "/logado.html";

}

function check(){
    user = sessionStorage.getItem("usuario")
    pass = sessionStorage.getItem("senha")

    document.querySelector("#user").value = user
    document.querySelector("#pass").value = pass
    }