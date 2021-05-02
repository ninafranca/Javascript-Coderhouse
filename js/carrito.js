// CARRITO //

window.onload = () => {
    onLoadCarrito()
    carritoDOM();
}



function eliminarDelCarrito(id) {
    console.log(id);
    const productoFueraDelCarrito = carrito.filter(productos => productos.id !== Number(id));
    console.log(productoFueraDelCarrito);
    carrito = [...productoFueraDelCarrito];
    renderCarrito(carrito);
}



let carrito = JSON.parse(localStorage.getItem("carritoData")) || [];
// Guardo producto comprado en el local storage y lo agrego a array "carrito" //
function agregarAcarrito(id) {
    const productoAcarrito = productos.find(producto => producto.id === Number(id));
    productoAcarrito.talle = ($(`#talle${productoAcarrito.id}`).val());
    if (carrito.includes(productoAcarrito) && carrito.find(producto => producto.talle === productoAcarrito.talle)) {
        carrito[carrito.indexOf(productoAcarrito)].cantidad++;
        carrito = [...carrito];
    } else {
        productoAcarrito.cantidad = 1;
        carrito.push(productoAcarrito);
    }
    console.log(carrito)
    localStorage.setItem("carritoData", JSON.stringify(carrito));
    carritoDOM(carrito);
    renderCarrito(carrito);
}

const cantidad = arrayDelCarrito => {
    let total = arrayDelCarrito.reduce((t, product) => t + product.cantidad, 0);
    console.log(total)
    return total
  }

// ON LOAD CARRITO !!!!!
function onLoadCarrito() {
    let carritoParseado = JSON.parse(localStorage.getItem("carritoData")) || carrito;
    renderCarrito(carritoParseado)
}



// Agrego nodo "carrito" al DOM //
const divContador = $(".div-contador")
function carritoDOM() {
    let carritoParseado = JSON.parse(localStorage.getItem("carritoData")) || carrito;
    let nodoCarrito = divContador.html(
    `
    <img src="/assets/bag.png" class="cart" data-bs-toggle="dropdown" aria-expanded="false">
    <p id="contador-clicks" data-bs-toggle="dropdown" aria-expanded="false">${cantidad(carritoParseado)}</p>
    <ul class="dropdown-menu">
        <li><p id="productos-carrito">Tu carrito está vacío</p></li>
    </ul>
    `
    );
    divContador && divContador.append(nodoCarrito);
    if (carritoParseado.length > 0) {
        renderCarrito(carritoParseado)
    }
}



function subtotal(arrayDelCarrito) {
    let total = arrayDelCarrito.reduce((t, product) => t + product.precio, 0).toFixed(2);
    return total
}

// Renderizo el carrito en el nodo "carrito" //
const renderCarrito = arrayDelCarrito => {
    let nodoCarrito = divContador.html(
        `
        <img src="/assets/bag.png" class="cart" data-bs-toggle="dropdown" aria-expanded="false">
        <p id="contador-clicks" data-bs-toggle="dropdown" aria-expanded="false">${cantidad(arrayDelCarrito)}</p>
        <ul class="dropdown-menu">
            <li id="render-producto"></li>
            <li><p id="subtotal-carrito">Subtotal: $ ${subtotal(arrayDelCarrito)}</p></li>
            <li><p id="descuento-carrito">Descuento: - $ ${subtotal(arrayDelCarrito) * 0.4}</p></li>
            <li><hr class="dropdown-divider"></li>
            <li id="total"><p>Total: $ ${subtotal(arrayDelCarrito) - (subtotal(arrayDelCarrito) * 0.4)}</p></li>
            <li><button class="dropdown-item" id="estilo-pagar" href="#">Pagar</button></li>
        </ul>
        `
        );
        divContador && divContador.append(nodoCarrito);
    // AGREGAR MODAL: PRODUCTO AGREGADO //
    let productoEnDOM = $("#render-producto");
    productoEnDOM.html("");
    let html = "";
    arrayDelCarrito.forEach(productos => {
        html += `
            <img src="/assets/${productos.archivo}.webp" class="logo" style="height: 7rem;">
            <p id="productos-carrito">${productos.cantidad} ${productos.producto} talle ${productos.talle} precio $${productos.precio} <span class="estilo-eliminar" value="${productos.id}" onclick="eliminarDelCarrito(${productos.id})">X</span></p>
            `;
    });
    productoEnDOM.html(html);
}