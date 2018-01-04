// Definindo as Rotas com o serviço de $routeProvider
exemploApp.config(function($stateProvider, $urlRouterProvider, $locationProvider) { 
    
    // Definindo rota padrão caso nenhuma das rotas sejam aceitadas.
    $urlRouterProvider.otherwise('/404');
    // urlRouterProvider.otherwise(() => $state.go('404'));  
    // Usando o método gerenciador de estados da aplicação. Ele recebe dois parâmetros, o primeiro com a string da url 
    // e o segundo um objeto de configurações para respectivo estado. 
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '/home/home.html',
        controller: 'homeController'
      })
      .state('sobre', {
        url: '/sobre',
        templateUrl: '/sobre/sobre.html',
        controller: 'sobreController'
      })
      .state('contato', {
        url: '/contato',
        templateUrl: '/contato/contato.html',
        controller: 'contatoController'
      })
      .state('404', {
        url: '/404',
        templateUrl: '/404/404.html',
        controller: '404Controller'
      });
    // Habilitando o modo HTML5
    $locationProvider.html5Mode(true);
});