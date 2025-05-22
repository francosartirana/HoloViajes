//REGISTRO DE USUARIO
document.getElementById("formUsuario").addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const userData = Object.fromEntries(formData.entries());

  userData.administrador = userData.administrador === "true";

  try {
    const response = await fetch("http://localhost:5000/usuarios", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData)
    });

    if (response.ok) {
      alert("Usuario creado correctamente");
      e.target.reset();
    } else {
      const errorData = await response.json();
      console.error("Error del servidor:", errorData);
      alert("Error al crear el usuario");
    }
  } catch (error) {
    console.error("Error de red:", error);
    alert("Error de conexión al servidor");
  }
});    

//INICIO DE SESION
document.getElementById("formLogin").addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const userData = Object.fromEntries(formData.entries());

  try {
    const response = await fetch("http://localhost:5000/usuarios", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      throw new Error(`Error del servidor: ${response.status}`);
    }

    const data = await response.json();
    const usuarioEncontrado = data.find(usuario => 
      usuario.email === userData.email && 
      usuario.password === userData.password
    );
    
    if (usuarioEncontrado) {
      // Cambiar el texto de todos los botones de login
      const botonesLogin = document.querySelectorAll('.botonlogin');
      botonesLogin.forEach(boton => {
        boton.textContent = usuarioEncontrado.nombreUsuario;
      });
      alert("Inicio de sesión exitoso");
      e.target.reset();
    } else {
      alert("Credenciales incorrectas");
    }

  } catch (error) {
    console.error("Error:", error);
    alert("Error de conexión al servidor. Verifica que el servidor esté corriendo.");
  }
});

    

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

document.getElementById("verRegistro").addEventListener("click", () => {
  contenedorLogin.classList.remove("visible");
  contenedorLogin.classList.add("oculto");

  contenedorRegistro.classList.remove("oculto");
  contenedorRegistro.classList.add("visible");
});

document.getElementById("verLogin").addEventListener("click", () => {
  contenedorRegistro.classList.remove("visible");
  contenedorRegistro.classList.add("oculto");

  contenedorLogin.classList.remove("oculto");
  contenedorLogin.classList.add("visible");
});

