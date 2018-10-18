const productController = require('./../controllers/commerces'); //can call rideController or any name
//from current location (routes.js)-->server-->into controllers and then the rides file; you write const rideController so you do not have to rewrite the entire address to get to rides file
const path = require('path'); //at angular
//module.exports means to deliver the values inside of it and require means to run

module.exports = (app) => {
    app.get('/api/products', productController.allProducts); //no index on Express
    app.post('/api/products/new', productController.addProduct);
    app.put('/api/products/:id/edit', productController.editProduct);
    app.get('/api/products/:id', productController.singleProduct);
    app.delete('/api/products/:id', productController.removeProduct);

   

    app.all('*', (req, res) => res.sendFile(path.resolve('./public/dist/public/index.html')))
}