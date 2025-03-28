
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        let splash = document.getElementById("splashScreen");
        let login = document.getElementById("inicioSesion");

        // Aplicamos la animación de desvanecimiento
        splash.classList.add("hidden");

        // Esperamos la animación antes de mostrar el login
        setTimeout(() => {
            splash.style.display = "none"; // Finalmente lo ocultamos
            login.style.display = "flex"; // Aseguramos que se mantenga alineado
        }, 1); // Debe coincidir con el tiempo de la transición CSS
    }, 5000); // 5 segundos de splash
});

//ESTO ES UNA IMPLEMENTACION DE WEB PARA EL IR Y VENIR(Preguntar al profe si es eficiente)
let current_step = 0;
function stepPreview(){
    current_step++
    document.getElementById("barra-progreso").style.display = "block"
    if(current_step == 1){
        document.getElementById("progreso-1").style.display = "block"
        document.getElementById("progreso-2").style.display = "none"
        document.getElementById("progreso-3").style.display = "none"
        document.getElementById("transferencia-destino").style.display = "none"
        document.getElementById("tipo-cuenta").style.display = "block"
    }
    if(current_step == 2){
        document.getElementById("progreso-1").style.display = "none"
        document.getElementById("progreso-2").style.display = "block"
        document.getElementById("progreso-3").style.display = "none"
        document.getElementById("tipo-cuenta").style.display = "none"
    }
    if(current_step ==3 ){
        document.getElementById("progreso-1").style.display = "none"
        document.getElementById("progreso-2").style.display = "none"
        document.getElementById("progreso-3").style.display = "block"
    }
    if(current_step > 3){
        current_step = 0;
    }
}
function back_Step(){
    if(current_step == 1){
        document.getElementById("barra-progreso").style.display = "none"
        document.getElementById("progreso-1").style.display = "none"
        document.getElementById("transferencia-destino").style.display = "block"
        document.getElementById("tipo-cuenta").style.display = "none"
        current_step--
    }
    if(current_step == 2){
        document.getElementById("progreso-2").style.display = "none"
        document.getElementById("progreso-1").style.display = "block"
        document.getElementById("tipo-cuenta").style.display = "block"
        current_step--
    }
    if(current_step == 3){
        document.getElementById("progreso-3").style.display = "none"
        document.getElementById("progreso-2").style.display = "block"
        current_step--
    }
}