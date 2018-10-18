const mongoose = require('mongoose');
const Product = mongoose.model('Product')

module.exports = {
    allProducts: (req, res) => {
        
        Product.find({}, (err, products) => {
            if (err) {
                res.json(err);
            } else {
                res.json(products);
            }
        })
    },
    singleProduct: (req, res) => {
        Product.findOne({ _id: req.params.id }, (err, product) => { //findOne is an inbuilt method to find one id
            if (err) {
                res.json(err);
            } else {
                res.json(product);
            }
        })
    },

    addProduct: (req, res) => {
        Product.create(req.body, (err, product) => {
            if (err) {
                res.json(err);
            } else {
                res.json(product);
            }
        })
    },

    editProduct: (req, res) => {
        Product.findOne({_id: req.params.id}, (err, product)=>{
            if (err){
                res.json(err)
            }else{
                product.name=req.body.name;
                product.quantity=req.body.quantity;
                product.price=req.body.price;
                product.save((err, data)=>{
                    if (err){
                        res.json(err)
                    }else{
                        res.json(data)
                    }
                });
            }
        })
    },

    removeProduct: (req, res) => {
        Product.remove({ _id: req.params.id }, (err, data) => {
            if (err) {
                res.json(err);
            } else {
                res.json(data);
            }
        })
    },
}