const Product = require('../models/product.model');

exports.product_create = function (req, res, next) {
    let product = new Product({
        name: req.body.name,
        password: req.body.password,
        v: req.body.v
    });
    //saving to db
    product.save(function (err, product) {
        if (err) {
            return next(err);
        }
        res.json(product.name);
    })
};

exports.product_details = function (req, res, next) {
    Product.findById(req.params.id, function (err, product) {
        if (err) return next(err);
        res.send(product);
    })
};

    /*Product.find({}, function (err, product) {
        if (err) return console.log("err"); //next(err);
        console.log("ran");
        res.send(product);
    })*/
//
exports.product_update = function (req, res, next) {
    Product.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, function (err, product) {
        if (err) return next(err);
        res.send('Product updated.');
    });
};

exports.product_delete = function (req, res, next) {
    Product.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};
