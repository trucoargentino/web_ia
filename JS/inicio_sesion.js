function validarUsuario() {
    var usuario = document.getElementById("usuario").value;
    var clave = document.getElementById("clave").value;

    // Validar el campo de usuario
    if (usuario === "") {
        document.getElementById("mensajeUsuario").innerHTML = "Complete este campo";
        return false;
    } else {
        document.getElementById("mensajeUsuario").innerHTML = "";
    }

    // Validar el campo de clave
    if (clave === "") {
        document.getElementById("mensajeClave").innerHTML = "Complete este campo";
        return false;
    } else {
        document.getElementById("mensajeClave").innerHTML = "";
    }
    
    if (usuario === "usuario" && clave === "contrasena") {
        alert("Inicio de sesión exitoso");
    } else {
        alert("Usuario o clave incorrectos");
    }

    return true;
}