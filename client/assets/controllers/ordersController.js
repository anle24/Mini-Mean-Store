app.controller('ordersController', ['$scope', 'storeFactory', function($scope, storeFactory){
  $scope.customers = [];
  $scope.products = [];
  $scope.orders = [];

  function getOrders(){
    storeFactory.getOrders().then(function(data){
      $scope.orders = data;
    })
  }

  storeFactory.getCustomers().then(function(data){
    console.log('retrieving customers', data);
    $scope.customers = data;
  })

  storeFactory.getProducts().then(function(data){
    $scope.products = data;
  })

  getOrders();

  $scope.createOrder = function(){
    console.log($scope.newOrder._product);
    console.log($scope.newOrder);
    storeFactory.createOrder($scope.newOrder).then(function(){
      $scope.newOrder = {};
    }).then(getOrders)
  }

  $scope.deleteOrder = function(id){
    storeFactory.deleteOrder(id).then(getOrders)
  }

}])
