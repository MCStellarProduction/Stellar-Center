// Definir el menú y las opciones que tendrá
const menuItems = [
    { name: "Nuevo Juego", action: () => alert("Nuevo Juego Iniciado") },
    { name: "Cargar Juego", action: () => alert("Cargando Juego...") },
    { name: "Opciones", action: () => alert("Abrir opciones...") },
    { name: "Salir", action: () => window.close() }
];

// Crear el contenedor del menú
const createMenu = () => {
    const menuContainer = document.createElement('div');
    menuContainer.id = 'minecraft-menu';
    menuContainer.style.position = 'absolute';
    menuContainer.style.top = '50px';
    menuContainer.style.left = '50px';
    menuContainer.style.backgroundColor = '#333';
    menuContainer.style.padding = '10px';
    menuContainer.style.borderRadius = '10px';
    menuContainer.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
    menuContainer.style.display = 'none'; // El menú estará oculto inicialmente

    // Crear el título del menú
    const title = document.createElement('h2');
    title.innerText = 'Menú Principal';
    title.style.color = '#FFF';
    title.style.textAlign = 'center';
    menuContainer.appendChild(title);

    // Crear las opciones del menú
    const list = document.createElement('ul');
    list.style.listStyle = 'none';
    list.style.padding = '0';

    menuItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.style.margin = '10px 0';
        
        const button = document.createElement('button');
        button.innerText = item.name;
        button.style.padding = '10px';
        button.style.backgroundColor = '#444';
        button.style.color = '#FFF';
        button.style.border = 'none';
        button.style.borderRadius = '5px';
        button.style.cursor = 'pointer';
        
        // Acción de cada botón
        button.addEventListener('click', item.action);
        
        listItem.appendChild(button);
        list.appendChild(listItem);
    });

    menuContainer.appendChild(list);
    document.body.appendChild(menuContainer);
    
    return menuContainer;
};

// Función para mostrar/ocultar el menú
const toggleMenu = (menu) => {
    menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
};

// Crear el botón para abrir el menú
const createMenuButton = () => {
    const button = document.createElement('button');
    button.innerText = 'Abrir Menú';
    button.style.position = 'absolute';
    button.style.top = '20px';
    button.style.left = '20px';
    button.style.padding = '10px';
    button.style.backgroundColor = '#444';
    button.style.color = '#FFF';
    button.style.border = 'none';
    button.style.borderRadius = '5px';
    button.style.cursor = 'pointer';

    button.addEventListener('click', () => {
        toggleMenu(menu);
    });

    document.body.appendChild(button);
};

// Inicializar el menú
const initMinecraftMenu = () => {
    const menu = createMenu();
    createMenuButton();
};

window.onload = initMinecraftMenu;
