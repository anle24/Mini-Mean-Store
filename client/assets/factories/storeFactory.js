app.factory('storeFactory', function($http){
  var factory = {};
  var products = [];

  // using promises, sending HTTP requests to server
  factory.getProducts = function() {
    return $http.get('/products').then(function(res){
      return res.data;
    })
  }

  factory.getCustomers = function() {
    return $http.get('/customers').then(function(res){
      return res.data;
    })
  }

  factory.getOrders = function() {
    return $http.get('/orders').then(function(res){
      return res.data;
    })
  }

  factory.createCustomer = function(newCustomer) {
    return $http.post('/customers', newCustomer);
  }

  factory.deleteCustomer = function(id) {
    return $http.delete('/customers/delete/' + id)
  }

  factory.createProduct = function(newProduct) {
    return $http.post('/products', newProduct);
  }

  factory.deleteProduct = function(id) {
    console.log('factory product delete');
    console.log(id);
    return $http.delete('/products/' + id)
  }

  factory.createOrder = function(newOrder) {
    return $http.post('/orders', newOrder);
  }

  factory.deleteOrder = function(id) {
    return $http.delete('/orders/' + id)
  }

  return factory;
})
