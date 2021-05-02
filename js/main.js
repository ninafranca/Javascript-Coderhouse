// MAIN //

// Arreglar "TODOS" al DOM
// Crear total $ suma de productos.precio
// Crear descuento del total
// Trabajar el boton pagar
// Modal cuando hago click en "comprar"
// Boton eliminar
// Agregar comments
// Borrar archivos.js de mas
// Borrar contador.js

// ($(`#talle${productoAcarrito.id}`).val());



































/*
const renderCart = arrayDelCarrito => {
    let productoEnDOM = $(".dropdown-menu")
    productoEnDOM.html("");
    let html = "";
    arrayDelCarrito.forEach(productos => {
        html += `
            <li><p id="productos-carrito">${productos.producto} talle precio $${productos.precio}</p></li>
            <li><p id="descuento-carrito">Descuento: - $ FUNCION</p></li>
            <li><hr class="dropdown-divider"></li>
            <li id="total"><p>Total: $ FUNCION</p></li>
            <li><button class="dropdown-item" id="estilo-pagar" href="#">Pagar</butto></li>
        </ul>
        `;
    });
    productoEnDOM.html(html);
}
*/





















/*
// let btnComprar = $(".boton-comprar");
let carrito = [];
function agregarAcarrito(e) {
    const productoAcarrito = productos.find(productos => productos.id === Number(e.target.value));
    carrito.push(productoAcarrito);
    localStorage.setItem("carritoData", JSON.stringify(carrito));
    carritoDOM(carrito);
    renderCart(carrito);
}
let carritoGuardado = localStorage.getItem("carritoData");
console.log("Carrito: ", JSON.parse(carritoGuardado));

// Agrego nodo "carrito" al DOM //
const divContador = $(".div-contador")
function carritoDOM() {
    let nodoCarrito = divContador.html(
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
    divContador && divContador.append(nodoCarrito);
}


const renderCart = arrayDelCarrito => {
    divContador.html("");
    let html = "";
    arrayDelCarrito.forEach(productos => {
        html += `
        <img src="/assets/bag.png" class="cart" data-bs-toggle="dropdown" aria-expanded="false">
        <p id="contador-clicks" data-bs-toggle="dropdown" aria-expanded="false">0</p>
        <ul class="dropdown-menu">
            <li><p id="productos-carrito">${productos.producto} talle precio $${productos.precio}</p></li>
            <li><p id="descuento-carrito">Descuento: - $ FUNCION</p></li>
            <li><hr class="dropdown-divider"></li>
            <li id="total"><p>Total: $ FUNCION Total - Descuento</p></li>
            <li><button class="dropdown-item" id="estilo-pagar" href="#">Pagar</butto></li>
        </ul>
        `;
    });
    divContador.html(html);
}
*/





































/*
// Dolar API
$("#dolar-boton").click(
  () => {
    let valorDolar;
    $.get('https://www.dolarsi.com/api/api.php?type=valoresprincipales', 
        (res) => {
            alert(`Tomamos pago en dólares a valor de ARS${res[7].casa.compra} = USD1`);
            valorDolar = res[7].casa.compra;
        }
    );
  }
);

// Pedir tipo de calzado a mostrar //
let tipo = prompt("¿Que tipo de calzado queres ver: botas, zapatos, sandalias, mocasines o borcegos?");

// Filtrar productos por tipo //
let productosFiltrados = productos.filter(p => p.tipo === tipo);
console.log(productosFiltrados);



// Agregar productos segun filtraje //
for (let productos of productosFiltrados) {
    agregarProducto(productos);
}



// for (p in productos) {agregarProducto(productos)};


/*
// Ordenar los productos por precio ascendente // 
let precioAscendente = productos.sort((a,b) => {
    if(a.precio<b.precio) {
      return -1
    } else {
      return 1;
    }
  });
  console.log(precioAscendente);
*/


/*
let nuevoProducto = "";
// FUNCION PARA CREAR PRODUCTOS //
function contenidoProductos(nombreFoto, nombreProducto, precioProducto) {
    nuevoProducto = document.createElement("div")
    nuevoProducto.innerHTML = 
    `<img src="/assets/${nombreFoto}.webp"> 
        <div> 
            <p>${nombreProducto}</p> 
            <div> 
                <label for="talle">Talle</label> 
                <select name="talle" id="talle"> 
                <option value="36">36</option> 
                <option value="37">37</option> 
                <option value="38">38</option> 
                <option value="39">39</option> 
                <option value="40">40</option> 
                </select> 
            </div> 
            <p>${precioProducto}</p> 
            <button>Comprar</button> 
        </div>`;
    document.getElementById("productos-grid").appendChild(nuevoProducto);
}

// PRODUCTOS CREADOS DESDE JS //
contenidoProductos("bootsblack", "Botas Arya", "$5600");
contenidoProductos("beigeheels", "Zapatos Sansa", "$4900");
contenidoProductos("borcegoscadena", "Borcegos Daenerys", "$6200");
contenidoProductos("pinkyshoes", "Mocasines Jaime", "$4400");
contenidoProductos("goldboots", "Botas Jon", "$5800");
contenidoProductos("greenboots", "Botas Brienne", "$5200");
contenidoProductos("stripedsandal", "Sandalias Ygritte", "$3900");
contenidoProductos("redboots", "Botas Melisandre", "$5700");
contenidoProductos("chunkyblack", "Mocasines Cersei", "$4700");
contenidoProductos("needleheels", "Zapatos Missandei", "$5100");
contenidoProductos("beigeshoes", "Zapatos Margaery", "$4700");
contenidoProductos("sandalsblack", "Sandalias Khal", "$4500");
*/


/*
let filtro1 = document.createElement("p");
filtro1.innerHTML = "<p>$ ascendente</p>";
document.getElementById("aside").appendChild(filtro1);
let filtro2 = document.createElement("p");
filtro2.innerHTML = "<p>$ descendente</p>";
document.getElementById("aside").appendChild(filtro2);
*/


/*
// Funcion para ordenar la propiedad precio de menor a mayor //
function ordenar( a, b ) {
    if ( a.precio < b.precio ){
      return -1;
    }
    if ( a.precio > b.precio ){
      return 1;
    }
    return 0;
  }
  
// Imprimir el resultado de la funcion por consola //
console.log(productos.sort( ordenar ));


// Funcion para calcular el 40% off sobre el monto //
let monto;
function descuento() {
    do {
       monto = parseFloat(prompt("Ingrese el monto total de su compra"));
    }
    while (isNaN(monto))
    alert("El monto final con el 40% off es de $" + Math.floor(monto * 0.6));
    let totalCuotas = parseFloat(prompt("¿En cuántas cuotas abonás? ¿0, 3 o 6?"));
    let montoFinal = Math.round(monto * 0.6);
    switch (totalCuotas) {
        case 0:
        case 1:
            alert("Es una cuota de $" + montoFinal);
        break;
        case 3:
            alert("Son 3 cuotas de $" + (montoFinal / 3));
        break;
        case 6:
            alert("Son 6 cuotas de $" + (montoFinal / 6));
        break;
        default:
            alert("Inválido");
    }
}
// Llamada a la funcion //
descuento()
*/