const fs = require("fs");
const express = require('express');
const app = express();
const model = require("./server/model.js");
const PORT = process.env.PORT || 3000;
app.use(express.static(__dirname + "/"));
let system = new model.System();

app.get("/", function (request, response) {
    response.statusCode = 200;
    var contenido = fs.readFileSync(__dirname + "/client/index.html");
    response.setHeader("Content-type", "text/html");
    response.send(contenido);
});

app.get("/addUser/:nick", function (request, response) {
    let nick = request.params.nick;
    let res = system.addUser(nick);
    response.send(res);
});

app.get("/getUsers/", function (request,response) {
    let res = system.getUsers();
    response.send(res);
});

app.get("/activeUser/:nick", function(request, response){
    let nick = request.params.nick;
    let res = system.activeUser(nick);
    response.send(res);
})

app.get("/usersNumber/", function(request, response){
    let res = system.usersNumber();
    response.send(res);
})

app.get("/deleteUser/:nick", function(request, response) {
    let nick = request.params.nick;
    let res = system.deleteUser(nick);
    response.send(res);
})

app.listen(PORT, () => {
    console.log(`App está escuchando en el puerto ${PORT}`);
    console.log('Ctrl+C para salir');
});