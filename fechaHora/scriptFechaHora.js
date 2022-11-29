function cronometro(){
    var actualizarHora = function(){
        var fecha = new Date(),
            horas = fecha.getHours(),
            amPm,
            minutos = fecha.getMinutes(),
            segundos = fecha.getSeconds(),
            diaSemana = fecha.getDay(),
            dia = fecha.getDate(),
            mes = fecha.getMonth(),
            year = fecha.getFullYear();
        
        var phoras = document.getElementById('horas'),
            pAmPm = document.getElementById('amPm'),
            pMinutos = document.getElementById('minutos'), 
            pSegundos = document.getElementById('segundos'),
            pDiaSemana = document.getElementById('diaSemana'),
            pDia = document.getElementById('dia'),
            pMes = document.getElementById('mes'),
            pYear = document.getElementById('year');

        let semana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
        pDiaSemana.textContent = semana[diaSemana];

        pDia.textContent = dia;

        let mesArray = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        pMes.textContent = mesArray[mes];
        pYear.textContent = year;
    

        if (horas >=12){
            horas = horas - 12; 
            amPm = "PM";
        }else{
            amPm = "AM";
        }
    
        if (horas == 0){
            horas = 12;
            amPm = "AM";

        }

        phoras.textContent = horas;
        pAmPm.textContent = amPm;

        if (minutos < 10){
            minutos = "0" + minutos;
        }
        pMinutos.textContent = minutos;

        if (segundos < 10){
            segundos = "0" + segundos;
        }
        pSegundos.textContent = segundos;

    };
    actualizarHora();
    var intervalo = setInterval(actualizarHora, 1000);
}

cronometro();

