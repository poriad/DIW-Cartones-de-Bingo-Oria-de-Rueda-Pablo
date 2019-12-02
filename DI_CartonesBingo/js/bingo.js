$(document).ready(function () {
    $('[data-toggle="popover"]').popover();
});

$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

$(document).ready(function () {
    $('.toast').toast('show');
});

var puntuacion = 0;

function numeroMarcado(numero){
    numero.setAttribute("class","numClick col  h-100 borde4 pt-1");
}
/*
function comenzarPartida(){
    while(document.getElementById("numClick") != null){
        document.getElementById("numClick").setAttribute("class","numeroBingo");
    }
}*/

function contarPuntuacion(){
    var divs = document.getElementsByClassName("numClick").length;
    document.getElementById("puntuacionJugador").innerHTML = "Puntuación Actual: " + (divs*50);
}

setInterval(contarPuntuacion,500);