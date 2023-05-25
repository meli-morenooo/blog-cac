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

        },

        anime({
            targets: '.follow-us h2',
            opacity: [1, 0],
            duration: 1500,
            direction: 'alternate',
            loop: true
        }))