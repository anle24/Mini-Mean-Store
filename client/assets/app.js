var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'partials/index.html',
    controller: 'indexController'
  })
  .when('/products', {
    templateUrl: 'partials/products.html',
    controller: 'productsController'
  })
  .when('/orders', {
    templateUrl: 'partials/orders.html',
    controller: 'ordersController'
  })
  .when('/customers', {
    templateUrl: 'partials/customers.html',
    controller: 'customersController'
  })
  .otherwise({
    redirectTo: '/'
  });
})
