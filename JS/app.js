//*Declaracion de variables
const divProducts = document.querySelector(".divProducts");
let carrito = []


//*LLamar a las funciones
cargarProductos()


//*Funciones
function cargarProductos(){
    juegos.forEach((games) => {
        const div = document.createElement('div');
        divProducts.innerHTML += `
        <div class="gameInfo">
            <h3 class="nameProduct">${games.nombre}</h3>
            <h3 class="pricePRoduct">$${games.precio}</h3>
        </div>
        <div class="divButton">
            <a class="addButton"> Comprar </a>
        </div>`;
        divProducts.appendChild(div)
    });
}