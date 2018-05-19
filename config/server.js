module.exports = function(){
    /* Importando Express */
const express = require('express');
const app = express();

    /* Caminho para views */
app.set('view engine', 'ejs');
app.set('views','./app/views');
app.use(express.static('public'));

    /* Importando Caminho para Rotas */
const rotas = require('../app/rotas/web');
rotas(app);

    /* Servidor Porta 8000 */
app.listen(8000, function(){
    console.log("localhost: 8000");
});

};
