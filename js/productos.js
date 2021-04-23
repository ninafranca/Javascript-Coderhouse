// PRODUCTOS //

// Creo array de productos a partir de JSON y muestro en el DOM //
let productosGrid = $("#productos-grid");
let productos = new Array();
function productosJSON() {
    $.getJSON('./JSON/productos.json', (respuesta, estado) => {
        if (estado === "success") {
            console.log(respuesta);
            respuesta.productos.map(p => productos.push(p));
            vaciarAgregar();
        } else {
            console.log("error");
        }
    });
};











/*
// Array de productos //
let productos = [
    {producto: "Botas Arya", nombre: "Arya", tipo: "botas", color: "negro", precio: 5600, archivo: "bootsblack"},
    {producto: "Zapatos Sansa", nombre: "Sansa", tipo: "zapatos", color: "beige", precio: 4900, archivo: "beigeheels"},
    {producto: "Borcegos Daenerys", nombre: "Daenerys", tipo: "borcegos", color: "negro", precio: 6200, archivo: "borcegoscadena"},
    {producto: "Mocasines Jaime", nombre: "Jaime", tipo: "mocasines", color: "rosa", precio: 4400, archivo: "pinkyshoes"},
    {producto: "Botas Jon", nombre: "Jon", tipo: "botas", color: "negro", precio: 5800, archivo: "goldboots"},
    {producto: "Sandalias Sam", nombre: "Sam", tipo: "sandalias", color: "verde", precio: 4400, archivo: "greensandals"},
    {producto: "Botas Brienne", nombre: "Brienne", tipo: "botas", color: "verde", precio: 5200, archivo: "greenboots"},
    {producto: "Sandalias Ygritte", nombre: "Ygritte", tipo: "sandalias", color: "negro", precio: 3900, archivo: "stripedsandal"},
    {producto: "Botas Melisandre", nombre: "Melisandre", tipo: "botas", color: "rojo", precio: 5700, archivo: "redboots"},
    {producto: "Mocasines Cersei", nombre: "Cersei", tipo: "mocasines", color: "negro", precio: 4700, archivo: "chunkyblack"},
    {producto: "Borcegos Viserion", nombre: "Viserion", tipo: "borcegos", color: "rosa", precio: 5900, archivo: "borcegospink"},
    {producto: "Zapatos Missandei", nombre: "Missandei", tipo: "zapatos", color: "negro", precio: 5100, archivo: "needleheels"},
    {producto: "Zapatos Margaery", nombre: "Margaery", tipo: "zapatos", color: "beige", precio: 4700, archivo: "beigeshoes"},
    {producto: "Sandalias Khal", nombre: "Khal", tipo: "sandalias", color: "negro", precio: 4500, archivo: "sandalsblack"},
    {producto: "Mocasines Tyrion", nombre: "Tyrion", tipo: "mocasines", color: "rojo", precio: 4600, archivo: "redmocasines"},
]
*/
/*
// Guardar con stringify //
localStorage.setItem("productos", JSON.stringify(productos));
console.log(localStorage.getItem('productos'));

// Leer con parse //
var productosDecodificado = JSON.parse(localStorage.getItem("productos"));
*/