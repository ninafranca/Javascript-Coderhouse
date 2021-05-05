// FILTROS //

// Variables //
let tipoTodos = $("#todos");
let tipoBotas = $("#botas");
let tipoSandalias = $("#sandalias");
let tipoBorcegos = $("#borcegos");
let tipoZapatos = $("#zapatos");
let tipoMocasines = $("#mocasines");
let checkNegro = $("#negro");
let checkRojo = $("#rojo");
let checkRosa = $("#rosa");
let checkVerde = $("#verde");
let checkBeige = $("#beige");


// Función vaciar nodo y agregar productos //
function vaciarAgregar() {
    productosGrid.html("");
    for (let producto of productos) {
        agregarProducto(producto);
    }
}

// Función para usar en el filtraje por tipo de calzado //
function productosFiltradosTipo(tipo) { 
    let productosFiltrados = productos.filter(p => p.tipo === tipo);
    productosGrid.html("");
    productosGrid.hide();
    for (let productos of productosFiltrados) {
        agregarProducto(productos);
        productosGrid.fadeIn(800)
    }
}

// Filtro "todos los productos" a mostrar //
tipoTodos && tipoTodos.change( () => {
    productosGrid.html("");
    productosGrid.hide();
    for (let producto of productos) {
        agregarProducto(producto);
        productosGrid.fadeIn(800)
    }
});

// Filtro Botas a mostrar //
function filtroBotas() {
    if (tipoBotas.prop("checked", true)) {
        productosFiltradosTipo("botas");
    } else {
        vaciarAgregar();
    }
}
tipoBotas && tipoBotas.change(filtroBotas);

// Filtro Sandalias a mostrar //
function filtroSandalias() {
    if (tipoSandalias.prop("checked", true)) {
        productosFiltradosTipo("sandalias");
    } else {
        vaciarAgregar();
    }
}
tipoSandalias && tipoSandalias.change(filtroSandalias);

// Filtro Borcegos a mostrar //
function filtroBorcegos() {
    if (tipoBorcegos.prop("checked", true)) {
        productosFiltradosTipo("borcegos");
    } else {
        vaciarAgregar();
    }
}
tipoBorcegos && tipoBorcegos.change(filtroBorcegos);

// Filtro Zapatos a mostrar //
function filtroZapatos() {
    if (tipoZapatos.prop("checked", true)) {
        productosFiltradosTipo("zapatos");
    } else {
        vaciarAgregar();
    }
}
tipoZapatos && tipoZapatos.change(filtroZapatos);

// Filtro Mocasines a mostrar //
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

// Filtro color negro a mostrar //
function checkboxNegro() {
    if (checkNegro.prop("checked", true)) {
        productosFiltradosColor("negro")
    } else {
        vaciarAgregar();
    }
}
checkNegro && checkNegro.change(checkboxNegro);

// Filtro color rojo a mostrar //
function checkboxRojo() {
    if (checkRojo.prop("checked", true)) {
        productosFiltradosColor("rojo")
    } else {
        vaciarAgregar();
    }
}
checkRojo && checkRojo.change(checkboxRojo);

// Filtro color rosa a mostrar //
function checkboxRosa() {
    if (checkRosa.prop("checked", true)) {
        productosFiltradosColor("rosa")
    } else {
        vaciarAgregar();
    }
}
checkRosa && checkRosa.change(checkboxRosa);

// Filtro color verde a mostrar //
function checkboxVerde() {
    if (checkVerde.prop("checked", true)) {
        productosFiltradosColor("verde");
        
    } else {
        vaciarAgregar();
    }
}
checkVerde && checkVerde.change(checkboxVerde);

// Filtro color beige a mostrar //
function checkboxBeige() {
    if (checkBeige.prop("checked", true)) {
        productosFiltradosColor("beige");
    } else {
        vaciarAgregar();
    }
}
checkBeige && checkBeige.change(checkboxBeige);