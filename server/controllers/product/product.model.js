var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var AllupdatesSchema = new Schema({

   name:String,
   email:String,
   addresh:String,
   city:String,
   image:String,
    dateadded: { type: Date, default: Date.now },
    datemodified: { type: Date, default: Date.now },


})
// set up a mongoose model

module.exports = mongoose.model('product', AllupdatesSchema);