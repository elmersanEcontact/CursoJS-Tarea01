//Desarrollador: Elmer Sandoval Acosta

// Listado de usuarios válidos (simulado)
const usuarios = [
    { usuario: 'elmersan', contrasenia: 'elmersan' },
    { usuario: 'genesys', contrasenia: 'genesys' },
    { usuario: 'econtact', contrasenia: 'econtact' }
];
// Función para validar el formulario
const validateForm = (event) => {
    event.preventDefault(); // Evitar el envío del formulario por defecto

    // Resetear estilos y mensajes de error
    resetForm();

    // Obtener valores de los inputs
    const usuarioInput = document.getElementById('usuario');
    const contraseniaInput = document.getElementById('contrasenia');
    const usuario = usuarioInput.value.trim();
    const contrasenia = contraseniaInput.value.trim();

    // Validar si ambos campos están vacíos
    if (usuario === '' && contrasenia === '') {
        showAlert('Por favor, ingrese usuario y contraseña.', 'alert-danger');
        usuarioInput.classList.add('border-danger');
        contraseniaInput.classList.add('border-danger');
        return;
    }

    // Validar si el campo de usuario está vacío
    if (usuario === '') {
        showAlert('Por favor, ingrese usuario.', 'alert-danger');
        usuarioInput.classList.add('border-danger');
        return;
    }

    // Validar si el campo de contraseña está vacío
    if (contrasenia === '') {
        showAlert('Por favor, ingrese contraseña.', 'alert-danger');
        contraseniaInput.classList.add('border-danger');
        return;
    }

    // Validar credenciales
    const authenticatedUser = usuarios.find(user => user.usuario === usuario && user.contrasenia === contrasenia);

    if (authenticatedUser) {
        showAlert(`Sesión iniciada para ${authenticatedUser.usuario}.`, 'alert-success');
    } else {
        showAlert('Credenciales incorrectas.', 'alert-danger');
        usuarioInput.classList.add('border-danger');
        contraseniaInput.classList.add('border-danger');
        return;
    }
};

// Función para mostrar alertas de Bootstrap
const showAlert = (message, alertType) => {
    const alertMessage = document.getElementById('alertMessage');
    const alertText = document.getElementById('alertText');

    alertText.textContent = message;
    alertMessage.classList.add('show', alertType);

    // Ocultar la alerta después de 2 segundos
    setTimeout(() => {
        alertMessage.classList.remove('show');
        usuarioInput.classList.remove('border-danger');
        contraseniaInput.classList.remove('border-danger');     
    }, 2000);
   
};

// Función para limpiar el formulario y los mensajes
const clearForm = () => {
    resetForm();
    document.getElementById('loginForm').reset();
    
};

// Función para resetear estilos y mensajes de error
const resetForm = () => {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.style.border = '';
    });
    document.querySelectorAll('.error-message').forEach(span => span.textContent = '');
    const alertMessage = document.getElementById('alertMessage');
    alertMessage.classList.remove('show', 'alert-warning', 'alert-danger', 'alert-success');
    usuarioInput.classList.remove('border-danger');
    contraseniaInput.classList.remove('border-danger');
};

// Event Listeners
document.getElementById('loginForm').addEventListener('submit', validateForm);
document.getElementById('clearBtn').addEventListener('click', clearForm);

// Eliminar borde rojo al escribir en los inputs
const usuarioInput = document.getElementById('usuario');
const contraseniaInput = document.getElementById('contrasenia');

usuarioInput.addEventListener('input', () => {
    usuarioInput.classList.remove('border-danger');
});

contraseniaInput.addEventListener('input', () => {
    contraseniaInput.classList.remove('border-danger');
});
