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
      <li><p>Tu carrito está vacío</p></li>
      <li style="display:none;"><hr class="dropdown-divider"></li>
      <li style="display:none;"><button class="dropdown-item" id="estilo-pagar" href="#">Pagar</butto></li>
    </ul>
    `
    );
    divContador && divContador.append(nodoContador);
};
carritoDOM();

let carrito = [];
const botonComprar = $(".boton-comprar");
function storageCarrito() {
    carrito.push({
        Cantidad: botonComprar.click++,
        Producto: $(".producto-nombre").text(),
        Talle: $("id :selected").text(),
        Precio: $(".producto-precio").text()
    })
    localStorage.setItem("dataCarrito", JSON.stringify(carrito))
}
botonComprar && botonComprar.click(storageCarrito);
let carritoGuardado = localStorage.getItem("dataCarrito");
console.log("Carrito: ", JSON.parse(carritoGuardado));
















