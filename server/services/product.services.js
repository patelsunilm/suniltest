var bcrypt = require('bcryptjs');
var Q = require('q');
var product = require('../controllers/product/product.model');// get our mongoose model
var mongoose = require('mongoose');

var service = {};
service.addpackage = addpackage;
service.getpackage = getpackage;
service.deleteproduct = deleteproduct;
service.getproductbyid = getproductbyid;
function addpackage(pro) {


    var deferred = Q.defer();  
console.log('pro');    
console.log(pro.name);
var saveallupdates = new product({

   name:pro.name,
   email:pro.email,
   city:pro.city,
   addresh:pro.addresh
});



saveallupdates.save(function (err, saveallupdates) {
    if (!err) {

        console.log('sucess');
        deferred.resolve(saveallupdates);
    } else {
        console.log(err);
        deferred.reject(err.name + ': ' + err.message);
    }})

    return deferred.promise;


}


function getpackage() {
    var deferred = Q.defer(); 
    console.log('heeee gett')

    product.find(function(err,responce){
        if (!err) {

            console.log('sucess');
            deferred.resolve(responce);
        } else {
            console.log(err);
            deferred.reject(err.name + ': ' + err.message);
        }})
    
        return deferred.promise;



}


function deleteproduct(userid) {
    var deferred = Q.defer();  
  //  appuser.deleteOne({ _id: new mongoose.Types.ObjectId(userid.id) },
    product.deleteOne({ _id: new mongoose.Types.ObjectId(userid.id)},function(err, responce){

        if(!err) {
            deferred.resolve(responce);
        }else{

            deferred.reject(err.name + ': ' + err.message);
        }
    })
    return deferred.promise;
}

function getproductbyid(userid) {

    console.log('userid');
    console.log(userid);
    var deferred = Q.defer();  
  //  appuser.deleteOne({ _id: new mongoose.Types.ObjectId(userid.id) },
    product.findOne({ _id: new mongoose.Types.ObjectId(userid.id)},function(err, responce){

        if(!err) {
            deferred.resolve(responce);
        }else{

            deferred.reject(err.name + ': ' + err.message);
        }
    })
    return deferred.promise;
}
module.exports = service;
