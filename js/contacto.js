// CONTACTO //

// Variables //
let enviar = $("#enviar");
let form = new Array();

// Agregar los datos del form al local storage //
function agregarDatos(evento) {
    form.push({
        Nombre: $("#nombre").val(),
        Email: $("#mail").val(),
        Consulta: $("#consulta").val(),
    });
    localStorage.setItem("localData", JSON.stringify(form));
    evento.preventDefault();
}
enviar && enviar.click(agregarDatos);





















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
