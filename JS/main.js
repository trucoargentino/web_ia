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

let general = `<nav>
<a href="#"><img class="logo" src="./img/artificial.png" alt="Logo"></a>
<div class="nav-links">
    <div class="nav-bg">
        <a href="./index.html" class="nav-link">Introducción</a>
        <a " href="./tecnologiasia.html" class="nav-link">Inteligencias Artificiales</a>
        <a href="./nosotros.html" class="nav-link">Nosotros</a>
        <a href="./faq.html" class="nav-link">FAQ</a>
    </div>
    <div class="nav-actions">
        <a " href="./Acceso.html" class="nav-action">Iniciar Sesión</a>
        <a target="_blank" href="./registrate.html" class="nav-action">Regístrate</a>
    </div>
    <div class="nav-contacts">
    <a href="./contacto.html" class="nav-contact">Contacto</a>
    </div>

</div>
</nav>`;

document.querySelector("header").innerHTML = general;

let foot = `<footer>
    <div class="copyright">
        2023 <b> IA Technologies</b>&copy; Todos los derechos Reservados
    </div>
    <div class="social-icons">
        <a href="index.html"><img src="./img/email.png" alt=""></a>
        <a href="index.html"><img src="./img/facebook.png" alt="Facebook"></a>
        <a href="index.html"><img src="./img/instagram.png" alt="Instagram"></a>
        <a href="index.html"><img src="./img/twitter.png" alt="Twitter"></a>
        <a href="index.html"><img src="./img/github.png" alt="GitHub"></a>
        <a href="index.html"><img src="./img/youtube.png" alt="YouTube"></a>
    </div>
</footer>`;
document.querySelector("footer").innerHTML = foot;
