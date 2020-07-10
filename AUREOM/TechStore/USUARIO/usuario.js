const codigo = document.getElementById("codigo");
const usuario = document.getElementById("usuario");
const formulario = document.getElementById("formulario");
const errores = document.getElementById("error");
const empleados = document.getElementById("empleado");
const socios = document.getElementById("socio");

formulario.addEventListener("submit", e => {
    e.preventDefault();
    let error = " ";
    let empleado = " ";
    let socio = " ";
    let confirE = false;
    let confirS = false;
    errores.innerHTML = " ";
    empleados.innerHTML = " ";
    socios.innerHTML = " ";



    if (usuario == "Empleado" && codigo == 777777); {
        empleado = "CONFIRMAR <br>";
        confirE = true;

    }
    if (confirE) {
        empleados.innerHTML = empleado;
    }
    if (usuario == "Socio" && codigo == 123456); {
        socio = "CONFIRMAR <br>";
        confirS = true;

    }
    if (confirS) {
        socios.innerHTML = socio;
    }
    if (codigo.value.length < 6) {
        error = "la contraseña no es valida <br>";
        errores.innerHTML = error;

    }

})