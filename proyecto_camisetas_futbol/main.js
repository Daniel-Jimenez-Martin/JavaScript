//ZOOM

document.addEventListener("DOMContentLoaded", () => {
    const zoomContainer = document.querySelector('.zoom-container');
    const zoomImg = document.getElementById('zoom-img');

    if (zoomContainer && zoomImg) {
        zoomContainer.addEventListener('mousemove', (e) => {
            const rect = zoomContainer.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const xPercent = (x / rect.width) * 100;
            const yPercent = (y / rect.height) * 100;

            // Cambia el transform-origin para que el zoom siga al ratón
            zoomImg.style.transformOrigin = `${xPercent}% ${yPercent}%`;
            zoomImg.style.transform = "scale(2)";
        });

        zoomContainer.addEventListener('mouseleave', () => {
            zoomImg.style.transform = "scale(1)";
            zoomImg.style.transformOrigin = "center center";
        });
    }
});


// FOCUS

   let inputs = document.querySelectorAll('input');

        inputs.forEach( elemento => {
            elemento.addEventListener("focus", () => {
                elemento.classList.add("borde-oscuro");
            });
            elemento.addEventListener("blur", () => {
                elemento.classList.remove("borde-oscuro")
            });
        });

// HOVER



        inputs.forEach( elemento => {
            elemento.addEventListener("mouseover", () => {
                elemento.classList.add("borde");
            });
            elemento.addEventListener("mouseout", () => {
                elemento.classList.remove("borde")
            });
        });

