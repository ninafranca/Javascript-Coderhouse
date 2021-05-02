// CONTACTO FORM //

// Variable de elemento donde pongo el evento//
let enviar = $("#enviar");
// Creo array vacio para agregarle los datos//
let form = new Array();
// Funcion para agregar los datos al local storage //
function agregarDatos(evento) {
    form.push({
        Nombre: $("#nombre").val(),
        Email: $("#mail").val(),
        Consulta: $("#consulta").val(),
    });
    localStorage.setItem("localData", JSON.stringify(form));
    evento.preventDefault();
}
// Conecto el evento con la variable //
enviar && enviar.click(agregarDatos);
// Obtengo el string antes guardado //
let guardado = localStorage.getItem("localData");
console.log("Datos contacto: ", JSON.parse(guardado));






















/*
enviar.submit(function(e) {
    e.preventDefault(); // prevent actual form submit
    $.ajax(
        'request_ajax_data.php',
        {
            success: function(data) {
              alert('AJAX call was successful!');
              alert('Data from the server' + data);
            },
            error: function() {
              alert('There was some error performing the AJAX call!');
            }
         }
      );
});
*/


/*
function borrarDatos() {
    localStorage.clear();
}

function mostrarForm() {
    localStorage.getItem("localData");
}

function recibirDatos() {
    let input = localStorage.getItem("localData");
    if (input!= null)
    form = JSON.parse(input);
}
*/
