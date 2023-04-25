const relogio = setInterval(function time(){
    let date = new Date();
    let hours = date.getHours();
    const dia = String(date.getDate()).padStart(2, '0');
    const mes = String(date.getMonth() + 1).padStart(2, '0');
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    if(hours > 12) {
        day_night = "PM"
        hours = hours - 12;
    }

    if(hours < 10) {
        hours = "0" + hours;
    }

    if(minutes <  10) {
        minutes = "0" + minutes;
    }

    
    var horas = hours + ":" + minutes;
    document.getElementById("time").innerHTML = horas;
    document.getElementById("time2").innerHTML = horas;

});