function RestClient() {
    this.addUser = function (nick) {
        var cli = this;
        $.getJSON("/addUser/" + nick, function (data) {
            if (data.nick != -1) {
                console.log("Usuario " + nick + " ha sido registrado")
            }
            else {
                console.log("El nick ya está ocupado");
            }
        })
    }

    this.addUserAlternative = function (nick) {
        $.ajax({
            type: 'GET',
            url: '/addUser/' + nick,
            success: function (data) {
                if (data.nick != -1) {
                    console.log("Usuario " + nick + " ha sido registrado")
                }
                else {
                    console.log("El nick ya está ocupado");
                }
            },
            error: function (xhr, textStatus, errorThrown) {
                console.log("Status: " + textStatus);
                console.error("Error: " + errorThrown);
            },
            contentType: 'application/json'
        });
    }

    this.getUsers = function () {
        $.ajax({
            type: 'GET',
            url: '/getUsers',
            success: function (data) {
                console.log(JSON.stringify(data, null, 2));
            },
            error: function (xhr, textStatus, errorThrown) {
                console.error('❌ Error:', errorThrown);
            },
            contentType: 'application/json'
        });
    };

    this.usersNumber = function () {
        $.ajax({
            type: 'GET',
            url: '/usersNumber',
            success: function (data) {
                console.log(JSON.stringify(data, null, 2));
            },
            error: function (xhr, textStatus, errorThrown) {
                console.error('❌ Error:', errorThrown);
            },
            contentType: 'application/json'
        });
    };

    this.activeUser = function (nick) {
        $.ajax({
            type: 'GET',
            url: '/activeUser/' + nick,
            success: function (data) {
                if (data) {
                    console.log("Usuario " + nick + " activo.")
                }
                else {
                    console.log("El usuario no existe.");
                }
            },
            error: function (xhr, textStatus, errorThrown) {
                console.log("Status: " + textStatus);
                console.error("Error: " + errorThrown);
            },
            contentType: 'application/json'
        });
    }

    this.deleteUser = function (nick) {
        $.ajax({
            type: 'GET',
            url: '/deleteUser/' + nick,
            success: function (data) {
                if (data) {
                    console.log("Usuario " + nick + " eliminado.")
                }
                else {
                    console.log("El usuario no existe.");
                }
            },
            error: function (xhr, textStatus, errorThrown) {
                console.log("Status: " + textStatus);
                console.error("Error: " + errorThrown);
            },
            contentType: 'application/json'
        });
    }

} 