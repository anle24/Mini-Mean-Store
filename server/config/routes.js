var orders = require('./../controllers/orders.js');
var customers = require('./../controllers/customers.js');
var products = require('./../controllers/products.js');

module.exports = function(app) {
  app.get('/', function(req, res){
    res.sendFile(__dirname + '../../client/index.html');
  });
  // Orders
  app.get('/orders', orders.index);
  // app.get('/orders/recent', orders.recent);
  app.post('/orders', orders.create);
  // app.get('/orders/:id', orders.show);
  // app.delete('/orders/:id', orders.delete);

  // products
  app.get('/products', products.index);
  app.post('/products', products.create);
  app.delete('/products/:id', products.delete);

  // customers
  app.get('/customers', customers.index);
  // app.get('/customers/recent', customers.recent);
  app.post('/customers', customers.create);
  app.delete('/customers/delete/:id', customers.delete);
}
