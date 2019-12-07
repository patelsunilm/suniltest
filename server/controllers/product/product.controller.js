var express = require('express');
var router = express.Router();
var productservices = require('../../services/product.services');


exports.addpackage = function (req, res) {

    
    productservices.addpackage(req.body)    
        .then(function (package) {
            if (package) {

                res.send(package);
            } else {

                res.sendStatus(404);
            }
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}


exports.getpackage = function(req, res) {


    productservices.getpackage()    
    .then(function (package) {
        if (package) {

            res.send(package);
        } else {

            res.sendStatus(404);
        }
    })
    .catch(function (err) {
        res.status(400).send(err);
    });

}

exports.deleteproduct = function(req, res) {

   
    productservices.deleteproduct(req.params)    
    .then(function (package) {
        if (package) {

            res.send(package);
        } else {

            res.sendStatus(404);
        }
    })
    .catch(function (err) {
        res.status(400).send(err);
    });

}


exports.getproductbyid = function(req, res) {

   
    productservices.getproductbyid(req.params)    
    .then(function (package) {
        if (package) {

            res.send(package);
        } else {

            res.sendStatus(404);
        }
    })
    .catch(function (err) {
        res.status(400).send(err);
    });

}


