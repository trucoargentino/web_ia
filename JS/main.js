//Js para carrusel
document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    function showSlide(n) {
        slides[currentSlide].style.display = "none";
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].style.display = "block";
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    const nextButton = document.querySelector(".next-button");
    const prevButton = document.querySelector(".prev-button");

    nextButton.addEventListener("click", nextSlide);
    prevButton.addEventListener("click", prevSlide);

    showSlide(currentSlide);
});

 // Función para validar el formulario
 function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;

    if (nombre === "" || email === "" || mensaje === "") {
        alert("Por favor, completa todos los campos.");
        return false;
    }

    return true;
}

let general=`<nav>
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
</nav>`

document.querySelector("header").innerHTML=general

let foot=`<footer>
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
</footer>`
document.querySelector("footer").innerHTML=foot


