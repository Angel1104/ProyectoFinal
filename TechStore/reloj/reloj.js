(function() {
    var actualizarHora = function() {
        var fecha = new Date(),
            horas = fecha.getHours(),
            ampm,
            minutos = fecha.getMinutes(),
            segundos = fecha.getSeconds(),
            diaSemana = fecha.getDay(),
            dia = fecha.getDate(),
            mes = fecha.getMonth(),
            anio = fecha.getFullYear();

        var pHoras = document.getElementById("horas"),
            pAMPM = document.getElementById("ampm"),
            pMinutos = document.getElementById("minutos"),
            pSegundos = document.getElementById("segundos"),
            pDiaSemana = document.getElementById("diaSemana"),
            pDia = document.getElementById("dia"),
            pMes = document.getElementById("mes"),
            pAnio = document.getElementById("anio");

        var semana = ['Domingo', 'lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']
        pDiaSemana.textContent = semana[diaSemana];


        if (dia < 10) { dia = "0" + dia; };
        pDia.textContent = dia;

        var meses = ['Enero', 'Febreo', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Noviembre', 'Diciembre']
        pMes.textContent = meses[mes];

        pAnio.textContent = anio;

        if (horas >= 12) {
            horas = horas - 12;
            ampm = 'pm';
        } else {
            ampm = 'am';
        };
        if (horas == 0) {
            horas = 12;
        }

        pHoras.textContent = horas;
        pAMPM.textContent = ampm;

        if (minutos < 10) {
            minutos = "0" + minutos;
        };
        if (segundos < 10) {
            segundos = "0" + segundos;
        }
        pMinutos.textContent = minutos;
        pSegundos.textContent = segundos;


    };


    actualizarHora();
    var intervalo = setInterval(actualizarHora, 1000)
}())