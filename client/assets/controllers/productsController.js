app.controller('productsController', ['$scope', 'storeFactory', function($scope, storeFactory){

  $scope.products = [];

  function getProducts(){
    storeFactory.getProducts().then(function(data){
      $scope.products = data;
    });
  }

  getProducts();

  $scope.createProduct = function() {
    storeFactory.createProduct($scope.newProduct).then(function(){
      $scope.newProduct = {};
    }).then(getProducts)
  }

  $scope.deleteProduct = function(id) {
    storeFactory.deleteProduct(id).then(getProducts)
  }
}])
