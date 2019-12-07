var express = require('express');
var router = express.Router();
const multer = require('multer');
var fs = require('fs');
var productssss = require('../server/controllers/product/product.model');// get our mongoose model
var product = require('./controllers/product/product.controller');
router.post('/product/addpackage', product.addpackage);
router.get('/product/getpackage', product.getpackage);
router.delete('/product/deleteproduct/:id', product.deleteproduct)
router.get('/product/getproductbyid/:id',product.getproductbyid);
// router.post('/product', function(req,res){

//     console.log('hell suil');
//   })
 


var storage = multer.diskStorage({
    // destination
    destination: function (req, file, cb) {
  
      cb(null, '../src/assets/uploads/');
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  
  });
  
  var upload = multer({ storage: storage });
router.post('/product', upload.any('uploads[]'),function(req,res){
console.log('req.body');
console.log(req.body.name);

var uploadedfiles = req.files;
console.log(uploadedfiles[0].originalname)

var saveallupdates = new productssss({

    name:req.body.name,
    email:req.body.email,
    city:req.body.city,
    addresh:req.body.addresh,
    image:uploadedfiles[0].originalname
 });
 
 
 
 saveallupdates.save(function (err, saveallupdates) {
     if (!err) {
 
         console.log('sucess');
        res.send(saveallupdates);
     } else {
         console.log(err);
        res.send(err.name + ': ' + err.message);
     }})

})



router.post('/updatepackage',upload.any('uploads[]'),function(req,res){


    var uploadedfiles = req.files;
    console.log('snil');
    console.log(req.body.uploads);
    console.log(uploadedfiles);
    if(uploadedfiles = '' ||uploadedfiles == undefined || uploadedfiles == "undefined"  || uploadedfiles == "null" || uploadedfiles == null) {


       

        productssss.findOneAndUpdate({ _id: req.body._id }, {
            name:req.body.name,
            email:req.body.email,
            city:req.body.city,
            addresh:req.body.addresh,
            
        
            }, function (err, updateproducts) {
                if (!err) {
        
                    console.log('sucess');
                res.send(updateproducts);
        
                } else {
        
                    deferred.reject(err.name + ': ' + err.message);
                }
            })
        
    }else {

    }
   
})
module.exports = router;