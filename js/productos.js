// PRODUCTOS //

// Creo array de productos a partir de JSON y muestro en el DOM //
let productosGrid = $("#productos-grid");
let productos = new Array();
function productosJSON() {
    $.getJSON('./JSON/productos.json', (respuesta, estado) => {
        if (estado === "success") {
            respuesta.productos.map(p => productos.push(p));
            vaciarAgregar();
        } else {
            console.log("error");
        }
    });
};

// Función para crear los nodos de productos //
function agregarProducto(productos) {
    const productosInner = productosGrid.add(
    `
    <div class="div-productos">
        <img src="/assets/${productos.archivo}.webp"> 
        <div> 
            <p id="${productos.selector}">${productos.producto}</p> 
            <div> 
                <label for="talle">Talle</label> 
                <select name="talle" id="talle${productos.id}"> 
                    <option value="36" id="36">36</option>
                    <option value="37" id="37">37</option>
                    <option value="38" id="38">38</option>
                    <option value="39" id="39">39</option>
                    <option value="40" id="40">40</option>
                </select> 
            </div> 
            <p class="producto-precio" id="${productos.precio}">$${productos.precio}</p> 
            <button class="boton-comprar" onclick="agregarAcarrito(${productos.id})" value="${productos.id}">Comprar</button>
        </div>
    </div>
    `
    );
    productosGrid && productosGrid.append(productosInner);
}
for (let producto of productos) {
    agregarProducto(producto)
};
productosJSON();