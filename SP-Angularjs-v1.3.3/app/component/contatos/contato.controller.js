app.controller('ctrlContatos', function($scope) {
  $scope.contatos = [];
  
  $scope.add = function (contato) {
    $scope.contatos.push(contato);
    $scope.contato = {};
  },
  $scope.remove = function (index) {
    console.log(index);
    $scope.items.splice(index, 1)
  },
  $scope.edit = function (index) {
    $scope.editing = $scope.items.indexOf(index);
  }
     
})