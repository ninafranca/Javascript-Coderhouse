// FILTROS PRODUCTOS //

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
                <select name="talle" id="talle"> 
                    <option value="36" id="36">36</option> 
                    <option value="37" id="37">37</option> 
                    <option value="38" id="38">38</option> 
                    <option value="39" id="39">39</option> 
                    <option value="40" id="40">40</option> 
                </select> 
            </div> 
            <p class="producto-precio" id="${productos.precio}">$${productos.precio}</p> 
            <button class="boton-comprar" value="${productos.id}">Comprar</button>
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

/*
let productosGrid = $("#productos-grid");
function agregarProducto(productos) {
    $.ajax({
        method: "GET",
        url: "../JSON/productos.json",
        dataType: "json",
        success: function() {
            const productosInner = productosGrid.add(
                `
                <div class="div-productos">
                <img src="/assets/${productos.archivo}.webp"> 
                <div> 
                    <p class="producto-nombre">${productos.producto}</p> 
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
                    <p class="producto-precio">$${productos.precio}</p> 
                    <button class="boton-comprar">Comprar</button> 
                </div>
                </div>
                `
                );
            productosGrid && productosGrid.append(productosInner);
        }
    });
}

function agregarProducto(productos) {
    const productosInner = productosGrid.add(
    `
    <div class="div-productos">
    <img src="/assets/${productos.archivo}.webp"> 
    <div> 
        <p class="producto-nombre">${productos.producto}</p> 
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
        <p class="producto-precio">$${productos.precio}</p> 
        <button class="boton-comprar">Comprar</button> 
    </div>
    </div>
    `
    );
    productosGrid && productosGrid.append(productosInner);
}
for (let producto of productos) {
    agregarProducto(producto)
};
*/

// Funcion vaciar nodo y agregar productos //
function vaciarAgregar() {
    productosGrid.html("");
    for (let producto of productos) {
        agregarProducto(producto);
    }
}

// Funcion para usar en el filtraje por tipo //
function productosFiltradosTipo(tipo) { 
    let productosFiltrados = productos.filter(p => p.tipo === tipo);
    productosGrid.html("");
    productosGrid.hide();
    for (let productos of productosFiltrados) {
        agregarProducto(productos);
        productosGrid.fadeIn(800)
    }
}


// Filtro "todos" //
let tipoTodos = $("#todos");
tipoTodos && tipoTodos.change( () => {
    productosGrid.html("");
    productosGrid.hide();
    for (let producto of productos) {
        agregarProducto(producto);
        productosGrid.fadeIn(800)
    }
});


// Filtro Botas //
let tipoBotas = $("#botas");
function filtroBotas() {
    if (tipoBotas.is( ":checked" )) {
        productosFiltradosTipo("botas");
    } else {
        vaciarAgregar();
    }
}
tipoBotas && tipoBotas.change(filtroBotas);


// Filtro Sandalias //
let tipoSandalias = $("#sandalias");
function filtroSandalias() {
    if (tipoSandalias.prop("checked", true)) {
        productosFiltradosTipo("sandalias");
    } else {
        vaciarAgregar();
    }
}
tipoSandalias && tipoSandalias.change(filtroSandalias);


// Filtro Borcegos //
let tipoBorcegos = $("#borcegos");
function filtroBorcegos() {
    if (tipoBorcegos.prop("checked", true)) {
        productosFiltradosTipo("borcegos");
    } else {
        vaciarAgregar();
    }
}
tipoBorcegos && tipoBorcegos.change(filtroBorcegos);


// Filtro Zapatos //
let tipoZapatos = $("#zapatos");
function filtroZapatos() {
    if (tipoZapatos.prop("checked", true)) {
        productosFiltradosTipo("zapatos");
    } else {
        vaciarAgregar();
    }
}
tipoZapatos && tipoZapatos.change(filtroZapatos);


// Filtro Mocasines //
let tipoMocasines = $("#mocasines");
function filtroMocasines() {
    if (tipoMocasines.prop("checked", true)) {
        productosFiltradosTipo("mocasines");
    } else {
        vaciarAgregar();
    }
}
tipoMocasines && tipoMocasines.change(filtroMocasines);


// Funcion para usar en el filtraje por color //
function productosFiltradosColor(color) {
    let productosFiltrados = productos.filter(p => p.color === color);
    productosGrid.html("");
    productosGrid.hide();
    for (let productos of productosFiltrados) {
        agregarProducto(productos);
        productosGrid.fadeIn(800)
    }
}


// Color negro a mostrar //
let checkNegro = $("#negro");
function checkboxNegro() {
    if (checkNegro.prop("checked", true)) {
        productosFiltradosColor("negro")
    } else {
        vaciarAgregar();
    }
}
checkNegro && checkNegro.change(checkboxNegro);


// Color rojo a mostrar //
let checkRojo = $("#rojo");
function checkboxRojo() {
    if (checkRojo.prop("checked", true)) {
        productosFiltradosColor("rojo")
    } else {
        vaciarAgregar();
    }
}
checkRojo && checkRojo.change(checkboxRojo);


// Color rosa a mostrar //
let checkRosa = $("#rosa");
function checkboxRosa() {
    if (checkRosa.prop("checked", true)) {
        productosFiltradosColor("rosa")
    } else {
        vaciarAgregar();
    }
}
checkRosa && checkRosa.change(checkboxRosa);


// Color verde a mostrar //
let checkVerde = $("#verde");
function checkboxVerde() {
    if (checkVerde.prop("checked", true)) {
        productosFiltradosColor("verde");
        
    } else {
        vaciarAgregar();
    }
}
checkVerde && checkVerde.change(checkboxVerde);


// Color beige a mostrar //
let checkBeige = $("#beige");
function checkboxBeige() {
    if (checkBeige.prop("checked", true)) {
        productosFiltradosColor("beige");
    } else {
        vaciarAgregar();
    }
}
checkBeige && checkBeige.change(checkboxBeige);