// var exemploApp = angular.module('exemploApp', ['ngRoute']);
// Configurando rotas com routeProvider
exemploApp.config(function($routeProvider) {
  $routeProvider
  // Direcionando as rotas da aplicação
  // Rota para Home page
  .when('/', {
  	  templateUrl: '/public/home.html',
  	  controller: 'homeController'
  })
  // Rota para sobre a página
  .when('/sobre', {
  	templateUrl: '/public/sobre.html',
  	controller: 'sobreController'
  })
  // Rota para o contato da página
  .when('/contato', {
  	templateUrl: '/public/contato.html',
  	controller: 'contatoController'
  });

});