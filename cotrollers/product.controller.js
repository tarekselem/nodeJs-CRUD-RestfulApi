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

exports.test = function (req, res) {
    res.send('hiiiiii');
};