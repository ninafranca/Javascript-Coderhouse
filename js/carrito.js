// CARRITO //

let btnComprar = $(".boton-comprar");
let carrito = [];
function agregarAcarrito(e) {
    const productoAcarrito = productos.find(productos => productos.id === Number(e.target.value));
    carrito.push(productoAcarrito);
    console.log(carrito)
    localStorage.setItem("carritoData", JSON.stringify(carrito));
}

btnComprar && btnComprar.click(agregarAcarrito)


















/*
const botonCarrito = $(".div-contador");

const carrito2 = [];

const btnComprar = document.querySelectorAll(".boton-comprar");
// crear boton class btn-eliminar //
const btnEliminar = document.querySelectorAll(".btn-eliminar");

const agregar = e => {
    const productoAlCarrito = productos.find(
      producto => producto.id === Number(e.target.id));
    carrito2.push(productoAlCarrito);
    renderCart(carrito2);
};

const eliminarDelCarrito = e => {
    const productoFueraDelCarrito = carrito.filter(producto => producto.id !== Number(e.target.id));
    carrito = [...productoFueraDelCarrito];
    console.log(carrito2);
    renderCart(carrito2);
};
  
const renderCart = arrayDelCarrito => {
    // crear section class carrito //
    const sectionCarrito = document.querySelector(".carrito");
    sectionCarrito.style.background = "lightblue";
    sectionCarrito.innerHTML = "";
    let html = "";
    arrayDelCarrito.forEach(producto => {
        html += `
            <div style="display:flex; align-items:center; justify-content:space-evenly;">
              <p>${producto.nombre}</p>
              <span><strong>${producto.precio}</strong></span>
              <button class="boton-eliminar" value=${
                producto.id
              } style="color:red; cursor:pointer;" onclick="eliminarDelCarrito(event)">X</button>      
            </div>`;
    });
    sectionCarrito.innerHTML = html;
};

console.log(carrito2);
*/


/*
let carrito = new Array();
let botonComprar = $(".boton-comprar");
function clickComprar() {
    carrito.push ({
        cantidad: botonComprar.value,
        producto: $(".producto-nombre").value,
        color: `${productos.color}`.value,
        talle: $("#talle").value,
        precio: $(".producto-precio").value,
    });
    localStorage.setItem("infoLocal", JSON.stringify(carrito));
}
botonComprar && botonComprar.click(clickComprar);
console.log(carrito);
let carritoGuardado = localStorage.getItem("infoLocal");
console.log("carritoObtenido: ", JSON.parse(carritoGuardado));
*/
