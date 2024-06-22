const opcionesMenu = document.querySelectorAll('#hamburger li');

opcionesMenu.forEach(opcion => {
    opcion.addEventListener('click', () => {
        const menuId = opcion.dataset.target;
        cerrarMenu(menuId);
    });
});

function cerrarMenu(menuId) {
    const menu = document.querySelector(menuId);
    menu.style.display = 'none';
}
