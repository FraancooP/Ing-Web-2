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
        }, 1000); // Debe coincidir con el tiempo de la transición CSS
    }, 5000); // 5 segundos de splash
});
