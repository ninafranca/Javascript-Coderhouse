// CONTADOR PRODUCTOS CARRITO //
/*
// Contador de clicks en botón comprar //
let contadorClicks = $("#contador-clicks") || 0;
let botonComprar = $("button.boton-comprar");
let contador = new Array();
botonComprar.click(function () {
    let i = contadorClicks.text();
    contador.push(contadorClicks.text(++i));
    localStorage.setItem("contadorData", JSON.stringify(contador));
    let guardado = localStorage.getItem("contadorData");
    console.log("contadorCarrito: ", JSON.parse(guardado));
})
*/

// Agrego nodo "carrito" al DOM //
const divContador = $(".div-contador")
function carritoDOM() {
    const nodoContador = divContador.add(
    `
    <img src="/assets/bag.png" class="cart" data-bs-toggle="dropdown" aria-expanded="false">
    <p id="contador-clicks" data-bs-toggle="dropdown" aria-expanded="false">0</p>
    <ul class="dropdown-menu">
      <li><p id="productos-carrito">Tu carrito está vacío</p></li>
      <li style="display:none;"><hr class="dropdown-divider"></li>
      <li style="display:none;" id="total"><p>Total:</p></li>
      <li style="display:none;"><button class="dropdown-item" id="estilo-pagar" href="#">Pagar</butto></li>
    </ul>
    `
    );
    divContador && divContador.append(nodoContador);
};
carritoDOM();



/*
let selectorProductos = `${productos.selector}`;
let idBoton = `${productos.id}`;
let botonComprar = "comprar" + idBoton;
let carrito = [];
function storageCarrito() {
    carrito.push({
        Cantidad: botonComprar.click++,
        Producto: $("#selectorProductos").text(),
        Talle: $("id :selected").text(),
        Precio: $("#(${productos.precio})").text()
    })
    localStorage.setItem("dataCarrito", JSON.stringify(carrito))
}
botonComprar && botonComprar.click(storageCarrito);
let carritoGuardado = localStorage.getItem("dataCarrito");
console.log("Carrito: ", JSON.parse(carritoGuardado));
*/

/*
function vaciarCarrito() {
    document.getElementById("productos-carrito").innerHTML = "";
}

function eliminarDelCarrito(e) {
    let idProducto = parseInt(e.target.id.split("_")[1]);
    console.log("eliminarDelCarrito " + idProducto);
    productos.find(p=>p.id == idProducto).ventas = 0;
    actualizarCarrito();
}

function actualizarTotalCarrito() {
    let total = 0;
    for(producto of productos){
        total = total + producto.precio;
    }
    document.getElementById("total").innerText = total.toString();
}

function actualizarCarrito() {
    vaciarCarrito();
    for(producto of productos) {
            agregarProducto(productos);
    }
    actualizarTotalCarrito();
    localStorage.setItem("productos", JSON.stringify(productos));
}

const comprar = (e) => {
    // Comprar el producto
    productos.find(p=>p.id == e.target.parentNode.id).comprar(1);
    console.log(productos);
    actualizarCarrito();
};

document.getElementById(`${productos.id}`).onclick = comprar;
*/












