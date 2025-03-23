// Cuando la página se desplaza
    window.onscroll = function() {
        let navbar = document.querySelector('.navbar');

        // Si la página se ha desplazado más de 550 píxeles
        if (window.scrollY > 550) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };



//animacion de entrada

document.addEventListener("DOMContentLoaded", function() { 
    const welcomeAnimation=document.getElementById("welcomeAnimation");
    const elementos=document.querySelectorAll(".elemento");
    // Tiempo en milisegundos después del cual el div desaparecerá 
    const tiempoDesaparicion = 4000; 
    // Tiempo de retraso para mostrar los elementos internos 
    const tiempoRetrasoElementos = 1000;
    setTimeout(() => { 
        welcomeAnimation.classList.remove("div-aparecer"); 
        welcomeAnimation.classList.add("div-desaparecer"); 
    }, tiempoDesaparicion);
    setTimeout(() => { 
        elementos.forEach(elemento => {
             elemento.classList.add("elemento-aparecer"); 
            }); 
        }, tiempoRetrasoElementos);
    const form=document.querySelector(".form-container");
    form.classList.add('form-appear');
});

const modal2 = document.getElementById('modal2');
const modalImage2 = document.getElementById('modal-image2');
const closeBtn2 = document.getElementById('close2');
const cardItems = document.querySelectorAll('.card img');

// Mostrar la imagen ampliada en el modal al hacer clic en la imagen
cardItems.forEach(item => {
    item.addEventListener('click', (e) => { 
        modal2.style.display = 'flex';
        modalImage2.src = e.target.src;
    });
});

// Cerrar el modal al hacer clic en el icono de cierre
closeBtn2.addEventListener('click', () => {
    modal2.style.display = 'none';
});

// Cerrar el modal al hacer clic fuera de la imagen
window.addEventListener('click', (e) => {
    if (e.target === modal2) {
        modal2.style.display = 'none';
    }
});

const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const closeBtn = document.getElementById('close');
const galleryItems = document.querySelectorAll('.img-container');

// Mostrar la imagen ampliada en el modal al hacer clic en la imagen
galleryItems.forEach(item => {
    item.addEventListener('click', (e) => {
        modal.style.display = 'flex';
        modalImage.src = e.target.src;
    });
});

// Cerrar el modal al hacer clic en el icono de cierre
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Cerrar el modal al hacer clic fuera de la imagen
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
