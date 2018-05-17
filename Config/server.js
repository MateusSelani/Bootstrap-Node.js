module.exports = function(){
    /* Importando Express */
const express = require('express');
const app = express();

    /* Caminho para views */
app.set('view engine', 'ejs');
app.set('views','./App/views');

    /* Importando Caminho para Rotas */
const rotas = require('../App/Rotas/web');
rotas(app);

    /* Servidor Porta 8000 */
app.listen(8000, function(){
    console.log("localhost: 8000");
});

};