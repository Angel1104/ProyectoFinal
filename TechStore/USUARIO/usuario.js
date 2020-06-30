const codigo = document.getElementById("codigo");
const usuario = document.getElementById("usuario");
const formulario = document.getElementById("formulario");
const errores = document.getElementById("error");


formulario.addEventListener("submit", e => {
    e.preventDefault();
    let error = " ";
    let entrar = false;
    errores.innerHTML = "";
    /*if (usuario.value == "Empleado" && codigo.value.length == 000000) {

    }
    ifelse(usuario.value == "Socio" && codigo.value.length == 123456) {

    }*/
    if (codigo.value.length < 6 && codigo.value.length != 000000) {
        error = "la contraseña no es valida <br>";
        entrar = true;
    }
    if (entrar) {
        errores.innerHTML = error;
    }
})