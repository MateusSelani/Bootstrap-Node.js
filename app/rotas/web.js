    /* Exportando Rotas app para Servidor */
module.exports = function(app){

        /* Caminho para Pagina Empresa */
    app.get('/empresa', function(req, res){
        res.render('site/empresa');
    });
        /* Caminho para Pagina Contato */
    app.get('/contato', function(req, res){
        res.render('site/contato');
    });
        /* Caminho para Pagina Cadastro */
    app.get('/inscreva-se', function(req, res){
        res.render('site/cadastro');
    });
        /* Caminho para Pagina Login */
    app.get('/login', function(req, res){
        res.render('site/login');
    });

};
