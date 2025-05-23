// Función para validar el email
function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Función para validar la contraseña
function validarPassword(password) {
  // Mínimo 8 caracteres, al menos una letra mayúscula, una minúscula, un número y permite caracteres especiales
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\-_@#$%^&+=]{8,}$/;
  return regex.test(password);
}

// Función para validar el teléfono
function validarTelefono(telefono) {
  const regex = /^\d{10}$/; // 10 dígitos numéricos
  return regex.test(telefono);
}

// Función para validar el documento
function validarDocumento(documento) {
  const regex = /^\d{7,8}$/; // 7 u 8 dígitos numéricos
  return regex.test(documento);
}

//REGISTRO DE USUARIO
document.getElementById("formUsuario").addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const userData = Object.fromEntries(formData.entries());

  // Validaciones
  if (!validarEmail(userData.email)) {
    alert("Por favor, ingrese un email válido");
    return;
  }

  if (!validarPassword(userData.password)) {
    alert("La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y puede incluir caracteres especiales");
    return;
  }

  if (!validarTelefono(userData.telefono)) {
    alert("El teléfono debe tener 10 dígitos numéricos");
    return;
  }

  if (!validarDocumento(userData.documento)) {
    alert("El documento debe tener 7 u 8 dígitos numéricos");
    return;
  }

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

