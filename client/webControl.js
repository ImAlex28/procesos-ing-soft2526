function WebControl() {

    this.showAddUser = function() {
        // Construimos el formulario como una cadena HTML
        let cadena = '';
        cadena += '<div id="mAU" class="form-group">';
        cadena += '  <label for="nick">Nick:</label>';
        cadena += '  <input type="text" class="form-control" id="nick">';
        cadena += '  <button id="btnAU" type="button" class="btn btn-primary mt-2">Agregar usuario</button>';
        cadena += '</div>';

        // Insertamos el formulario en el div con id="au"
        $("#au").append(cadena);

        // Asociamos el evento click al botón
        $("#btnAU").on("click", function() {
            // Obtenemos el nick del input
            let nick = $("#nick").val();

            // Llamamos al método del cliente REST
            rest.addUser(nick);

            // Eliminamos el formulario después de hacer clic
            $("#mAU").remove();
        });
    }
}
