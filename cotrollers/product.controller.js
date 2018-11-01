const Product = require('../models/product.model');

exports.product_details = (req, res) => {
    Product.findById(req.params.id, (err, product)=>{
        if (err) return next(err);
        res.send(product);
    });
}

exports.product_create = function (req, res) {
    let product = new Product ( 
        {
            name: req.body.name,
            price: req.body.price
        }
    );

    product.save(function (err) {
        if (err) {
            return next(err);
        }

        res.send('product created successfully');
    });
};

exports.product_update = (req, res) => {
 Product.findByIdAndUpdate(req.params.id, { $set: req.body }, (err, product) => {
    if (err) return next(err);
    
    res.send('product updated.');
 });
};

exports.product_delete = (req, res) => {
    Product.findByIdAndRemove(req.params.id, (err) => {
        if (err) return next(err);

        res.send('Deleted Successfully');
    });
};
