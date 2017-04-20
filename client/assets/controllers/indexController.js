app.controller('indexController', ['$scope', 'storeFactory', function($scope, storeFactory) {
  $scope.products = [];
  $scope.recentOrders = [];
  $scope.newCustomers = [];

  storeFactory.getProducts().then(function(data){
    $scope.products = data;
  });



}])
