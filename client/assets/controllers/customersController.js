app.controller('customersController', ['$scope', 'storeFactory', function($scope, storeFactory){

  $scope.customers = [];

  function getCustomers(){
    storeFactory.getCustomers().then(function(data){
      $scope.customers = data;
    });
  }

  getCustomers();

  $scope.createCustomer = function() {
    console.log('create customer button clicked');
    storeFactory.createCustomer($scope.newCustomer).then(function(){
      $scope.newCustomer = {};
    }).then(getCustomers)
  }

  $scope.deleteCustomer = function(id) {
    storeFactory.deleteCustomer(id).then(getCustomers)
  }
}])
