// Configurando rotas com routeProvider
exemploApp.config(function($routeProvider) {
  $routeProvider
  // Direcionando as rotas da aplicação
  // Rota para Home page
  .when('/', {
  	  templeteUrl: '/public/home.html',
  	  controller: 'homeController'
  })
  // Rota para sobre a página
  .when('/sobre', {
  	templeteUrl: '/public/sobre.html',
  	controller: 'sobreController'
  })
  // Rota para o contato da página
  .when('/contato', {
  	templeteUrl: '/public/contato.html',
  	controller: 'contatoController'
  });

});