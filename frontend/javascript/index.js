
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


/*

            <script>
                document.getElementById("usuario").addEventListener("click", async () => {
                try {
                    const response = await fetch("http://localhost:5000/usuarios");
                    const data = await response.json();

                    data.forEach(user => {
                        document.getElementById("nombre").textContent = user.nombreUsuario;
                        document.getElementById("apellido").textContent = user.apellidoUsuario;
                        document.getElementById("documento").textContent = user.documento;
                        document.getElementById("fechaNacimiento").textContent = user.fechaNacimiento;
                        document.getElementById("telefono").textContent = user.telefono;
                        document.getElementById("email").textContent = user.email;
                        document.getElementById("password").textContent = user.password;
                        document.getElementById("direccion").textContent = user.direccion;
                        document.getElementById("administrador").textContent = user.administrador;
                    });
                } catch (error) {
                    console.error("Error al obtener los usuarios:", error);
                }
            });
            </script>





*/