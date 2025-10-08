const fs = require("fs");
const express = require('express');
const app = express();
const model = require("./server/model.js"); 
const PORT = process.env.PORT || 3000;
app.use(express.static(__dirname + "/"));
app.get("/", function (request, response) {
    response.statusCode = 200;
    let system = new model.System();
    var contenido=fs.readFileSync(__dirname+"/client/index.html"); 
    response.setHeader("Content-type","text/html"); 
    response.send(contenido); 
});
app.listen(PORT, () => {
    console.log(`App está escuchando en el puerto ${PORT}`);
    console.log('Ctrl+C para salir');
});