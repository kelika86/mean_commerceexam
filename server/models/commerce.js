const mongoose = require('mongoose');



const ProductSchema = mongoose.Schema({
    name: { type: String, required: [true, "Enter name"], minlength: [3, 'Name must be 3 or more characters'] },
    quantity: { type: Number, required: [true, "Enter quantity"], min: [0, "Quantity must be greater than zero"] },
    price: { type: Number, required: [true, "Enter price"], min: [0, "Price must be greater than zero"] },

    //check for max length of arrayvalidation
});

mongoose.model('Product', ProductSchema)