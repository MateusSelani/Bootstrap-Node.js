    /* Exportando Rotas app para Servidor */
module.exports = function(app){

        /* Caminho para Pagina Index */
    app.get('/', function(req, res){
        res.render('site/index');
    });
        /* Caminho para Pagina Empresa */
    app.get('/empresa', function(req, res){
        res.render('site/empresa');
    });
        /* Caminho para Pagina Contato */
    app.get('/contato', function(req, res){
        res.render('site/contato');
    });

};