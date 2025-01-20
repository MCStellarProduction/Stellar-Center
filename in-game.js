// Crear el estilo de la página y los elementos del menú con JavaScript
document.addEventListener('DOMContentLoaded', () => {
    // Estilo básico de la página
    document.body.style.margin = 0;
    document.body.style.padding = 0;
    document.body.style.fontFamily = 'Arial, sans-serif';
    document.body.style.backgroundColor = '#1e1e1e';
    document.body.style.color = '#fff';
    document.body.style.display = 'flex';
    document.body.style.justifyContent = 'center';
    document.body.style.alignItems = 'center';
    document.body.style.height = '100vh';

    // Crear el botón de menú
    const menuButton = document.createElement('button');
    menuButton.innerText = 'Abrir Menú';
    menuButton.style.padding = '15px 30px';
    menuButton.style.backgroundColor = '#4CAF50';
    menuButton.style.color = '#fff';
    menuButton.style.border = 'none';
    menuButton.style.borderRadius = '5px';
    menuButton.style.fontSize = '16px';
    menuButton.style.cursor = 'pointer';
    menuButton.style.transition = 'background-color 0.3s ease';

    menuButton.addEventListener('mouseover', () => {
        menuButton.style.backgroundColor = '#45a049';
    });

    menuButton.addEventListener('mouseout', () => {
        menuButton.style.backgroundColor = '#4CAF50';
    });

    // Crear el menú
    const menu = document.createElement('div');
    menu.style.position = 'absolute';
    menu.style.top = '70px';
    menu.style.left = '50%';
    menu.style.transform = 'translateX(-50%)';
    menu.style.backgroundColor = '#333';
    menu.style.padding = '20px';
    menu.style.borderRadius = '10px';
    menu.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
    menu.style.display = 'none'; // Inicialmente oculto
    menu.style.width = '250px';
    menu.style.textAlign = 'center';

    const title = document.createElement('h2');
    title.innerText = 'Menú Principal';
    title.style.margin = '0 0 20px 0';
    menu.appendChild(title);

    // Crear las opciones del menú
    const menuItems = [
        { label: 'Nuevo Juego', action: newGame },
        { label: 'Cargar Juego', action: loadGame },
        { label: 'Opciones', action: openOptions },
        { label: 'Salir', action: exitGame }
    ];

    menuItems.forEach(item => {
        const button = document.createElement('button');
        button.innerText = item.label;
        button.style.backgroundColor = '#444';
        button.style.color = '#fff';
        button.style.border = 'none';
        button.style.padding = '10px';
        button.style.width = '100%';
        button.style.borderRadius = '5px';
        button.style.cursor = 'pointer';
        button.style.marginBottom = '10px';
        button.style.fontSize = '18px';
        button.style.transition = 'background-color 0.3s ease';

        button.addEventListener('mouseover', () => {
            button.style.backgroundColor = '#666';
        });

        button.addEventListener('mouseout', () => {
            button.style.backgroundColor = '#444';
        });

        button.addEventListener('click', item.action);
        menu.appendChild(button);
    });

    // Funciones para cada acción del menú
    function newGame() {
        alert('Nuevo Juego Iniciado!');
    }

    function loadGame() {
        alert('Cargando Juego...');
    }

    function openOptions() {
        alert('Abriendo opciones...');
    }

    function exitGame() {
        window.close(); // Intenta cerrar la ventana (aunque no funciona en todos los navegadores)
    }

    // Función para alternar la visibilidad del menú
    function toggleMenu() {
        menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
    }

    // Agregar el botón de menú y el menú al DOM
    document.body.appendChild(menuButton);
    document.body.appendChild(menu);

    // Agregar el evento de clic al botón para abrir/cerrar el menú
    menuButton.addEventListener('click', toggleMenu);
});
