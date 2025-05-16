
const botonDespliegue = document.querySelector('.botondespliegue')
const botonDespliegueIcono = document.querySelector('.botondespliegue i')
const menuHamburguesa = document.querySelector('.menuhamburguesa')

botonDespliegue.onclick = function () {
        menuHamburguesa.classList.toggle('abierto')
        const estaAbierto = menuHamburguesa.classList.contains('abierto')

        botonDespliegueIcono.classList = estaAbierto
            ? 'fa-solid fa-xmark'
            : 'fa-solid fa-bars'
}







const botonFiltrar = document.getElementById("filtrar")
const destinos = document.getElementById("planetas");
const fechas = document.getElementById("fechas");
const destinoElegido = document.getElementById("destinoElegido");
const fechaElegida = document.getElementById("fechaElegida");

botonFiltrar.addEventListener ("click", () => {
    const destinoSeleccionado = planetas.value;
    const fechaSeleccionada = fechas.value;

    destinoElegido.textContent = destinoSeleccionado;
    fechaElegida.textContent = fechaSeleccionada;
});


