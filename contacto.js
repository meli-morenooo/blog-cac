const form = document.getElementById('contactForm');
        const successMessage = document.querySelector('.success-message');

        form.addEventListener('submit', function(event) {
            event.preventDefault();

            // Validación
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const mensaje = document.getElementById('mensaje').value;

            if (!nombre || !email || !mensaje) {
                alert('Por favor, completa todos los campos.');
                return;
            }

            // Envío del formulario
            form.submit();

            // Animación de éxito
            successMessage.style.display = 'block';
            anime({
                targets: successMessage,
                translateY: [-50, 0],
                opacity: [0, 1],
                duration: 1000,
                easing: 'easeOutElastic(1, .8)'
            });
        });