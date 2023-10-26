let head =  `<header>
<nav>
    <input type="checkbox" id="check">
    <label for="check" class="checkbtn">
        <img class="icon_bar" src="./img/icons/bar-de-hamburguesas.png" alt="">
    </label>

    <a href="./index.html" class="enlace"><img class="logo" src="./img/icons/artificial.png" alt="Logo"></a>
    <div class="nav-main">
        <ul class="open">
            <li><a class="active" href="./index.html">Introducción</a></li>
            <li><a  href=" ./tecnologias.html">Inteligencias Artificiales</a></li>
            <li><a href="./nosotros.html">Nosotros</a></li>
            <li><a href="./faq.html">FAQ</a></li>

            <li><a  href=" ./iniciosesion.html">Iniciar Sesión</a></li>
            <li><a target="_blank" href="./register.html">Regístrate</a></li>
            <li><a href="./contacto.html">Contacto</a></li>
        </ul>
    </div>
</nav>
</header>`
document.querySelector("header").innerHTML = head;

let foot = `<footer>
    <div class="copyright">
        2023 <b> IA Technologies</b>&copy; Todos los derechos Reservados
    </div>
    <div class="social-icons">
        <a href="index.html"><img src="./img/icons/email.png" alt=""></a>
        <a href="index.html"><img src="./img/icons/facebook.png" alt="Facebook"></a>
        <a href="index.html"><img src="./img/icons/instagram.png" alt="Instagram"></a>
        <a href="index.html"><img src="./img/icons/twitter.png" alt="Twitter"></a>
        <a href="index.html"><img src="./img/icons/github.png" alt="GitHub"></a>
        <a href="index.html"><img src="./img/icons/youtube.png" alt="YouTube"></a>
    </div>
</footer>`;
document.querySelector("footer").innerHTML = foot;

document.getElementById('check').addEventListener('change', function() {
    const navUl = document.querySelector('.nav-main ul');
    navUl.classList.toggle('active', this.checked);
});


function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;
  
    if (nombre === "" || email === "" || mensaje === "") {
      alert("Por favor, complete todos los campos.");
      return false;
    }
    alert("Formulario validado con éxito.");
    return true;
  }


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