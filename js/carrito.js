// CARRITO //

// Variables //
let divContador = $(".div-contador")

// Ejecuto funciones una vez que el DOM esté listo //
$(document).ready(onLoadCarrito)
$(document).ready(carritoDOM)



// Guardo producto comprado en el local storage y lo agrego a array "carrito" //
let carrito = JSON.parse(localStorage.getItem("carritoData")) || [];
function agregarAcarrito(id) {
    const talle = ($(`#talle${id}`).val());
    // Busco si está el producto en el carrito //
    const productoEnCarrito = carrito.find(producto => producto.idCarrito === `${id}-${talle}`);
    if (productoEnCarrito) {
        carrito[carrito.indexOf(productoEnCarrito)].cantidad++;
        carrito = [...carrito];
        // Guardo en el local storage y se renderiza //
        localStorage.setItem("carritoData", JSON.stringify(carrito));
        carritoDOM(carrito);
        renderCarrito(carrito);
        return;
    }
    // Si el producto no está en el carrito //
    const productoDB = productos.find(producto => producto.id === id);
    const productoAgregar = Object.assign({}, productoDB);
    if (productoAgregar) {
        productoAgregar.idCarrito = `${id}-${talle}`
        productoAgregar.talle = talle
        productoAgregar.cantidad = 1;
        carrito.push(productoAgregar);
    }
    // Guardo en el local storage y se renderiza //
    localStorage.setItem("carritoData", JSON.stringify(carrito));
    carritoDOM();
    renderCarrito(carrito);
}

// Recupero el carrito guardado en el local storage //
function onLoadCarrito() {
    let carritoParseado = JSON.parse(localStorage.getItem("carritoData")) || carrito;
    renderCarrito(carritoParseado);
}

// Elimino producto del carrito //
function eliminarDelCarrito(id) {
    const productoFueraDelCarrito = carrito.filter(productos => productos.id !== Number(id));
    carrito = [...productoFueraDelCarrito];
    localStorage.setItem("carritoData", JSON.stringify(carrito));
    if (carrito.length > 0) {
        renderCarrito(carrito);
    } else {
        carritoDOM();
    }
}

// Cantidad de productos //
const cantidad = arrayDelCarrito => {
    let total = arrayDelCarrito.reduce((t, product) => t + product.cantidad, 0);
    return total
}

// Agrego nodo "carrito" al DOM //
function carritoDOM() {
    // Recupero el carrito del local storage //
    let carritoParseado = JSON.parse(localStorage.getItem("carritoData")) || carrito;
    let nodoCarrito = divContador.html(
    `
    <img src="/assets/bag.png" class="cart" data-bs-toggle="dropdown" aria-expanded="false">
    <p id="contador-clicks" data-bs-toggle="dropdown" aria-expanded="false">${cantidad(carritoParseado)}</p>
    <ul class="dropdown-menu" style="width:14rem;">
        <li><p id="productos-carrito">Tu carrito está vacío</p></li>
    </ul>
    `
    );
    divContador && divContador.append(nodoCarrito);
    // Renderizo los productos si el carrito no está vacío //
    if (carritoParseado.length > 0) {
        renderCarrito(carritoParseado);
    }
}

// Cálculo del subtotal //
function subtotal(arrayDelCarrito) {
    let total = arrayDelCarrito.reduce((t, product) => t + product.precio, 0);
    return total
}

// Borro el carrito despues de pagar //
function borrarContenidoCarrito() {
        carrito = [];
        let nodoCarrito = divContador.html(
            `
            <img src="/assets/bag.png" class="cart" data-bs-toggle="dropdown" aria-expanded="false">
            <p id="contador-clicks" data-bs-toggle="dropdown" aria-expanded="false">0</p>
            <ul class="dropdown-menu" style="width:14rem;">
                <li><p id="productos-carrito">Tu carrito está vacío</p></li>
            </ul>
            `
            );
        divContador && divContador.append(nodoCarrito);
}

// Renderizo el carrito en el nodo "carrito"//
const renderCarrito = arrayDelCarrito => {
    let nodoCarrito = divContador.html(
        // Creo el contenido del carrito //
        `
        <img src="/assets/bag.png" class="cart" data-bs-toggle="dropdown" aria-expanded="false">
        <p id="contador-clicks" data-bs-toggle="dropdown" aria-expanded="false">${cantidad(arrayDelCarrito)}</p>
        <ul class="dropdown-menu">
            <li id="render-producto"></li>
            <li><p id="subtotal-carrito">Subtotal: $${subtotal(arrayDelCarrito)}</p></li>
            <li><p id="descuento-carrito">Descuento: <span id="agrandar-descuento">-</span> $${subtotal(arrayDelCarrito) * 0.4}</p></li>
            <li><hr class="dropdown-divider"></li>
            <li id="total"><p>Total: $${subtotal(arrayDelCarrito) - (subtotal(arrayDelCarrito) * 0.4)}</p></li>
            <li><button id="estilo-pagar" type="button" class="btn btn-primary dropdown-item" data-bs-toggle="modal" data-bs-target="#exampleModal" href="#">PAGAR</button></li>
        </ul>
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" data-bs-backdrop="static" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <img src="../assets/logo.png" alt="Logo Nanette" id="logo-modal">
                    </div>
                    <div class="modal-body">
                        ¡Tu compra ha sido realizada con éxito! El pedido estará disponible en 2 días hábiles
                    </div>
                    <div class="modal-footer">
                        <button onclick="borrarContenidoCarrito(event)" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Ok</button>
                    </div>
                </div>
            </div>
        </div>
        `
    );
    divContador && divContador.append(nodoCarrito);
    // Agrego cada producto en el carrito //
    let productoEnDOM = $("#render-producto");
    productoEnDOM.html("");
    let html = "";
    arrayDelCarrito.forEach(productos => {
        html += `
            <img src="/assets/${productos.archivo}.webp" class="logo" style="height: rem;">
            <div class="alinear-delete">
            <p id="productos-carrito">${productos.cantidad} ${productos.producto} talle ${productos.talle} precio $${productos.precio}</p>
            <span onclick="eliminarDelCarrito(${productos.id})">X</span>
            </div>
            `;
    });
    productoEnDOM.html(html);
}