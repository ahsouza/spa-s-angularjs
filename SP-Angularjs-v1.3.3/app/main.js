var app = angular.module('contatosApp',['ngRoute']);


app.config(function($routeProvider){


      $routeProvider
          .when('/',{
                templateUrl: '/app/component/home/home.html'
          })
          .when('/contatos',{
                templateUrl: '/app/component/contatos/contatos.html',
                controller: 'ctrlContatos'
          });


});


app.controller('cfgController',function($scope){

      $scope.message="Hello world";

});