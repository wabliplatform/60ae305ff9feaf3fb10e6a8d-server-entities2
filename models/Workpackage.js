
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const workpackageSchema = new Schema({
Underscoreid:String , 

wpName:String , 

wpDesc:String 


})

module.exports = {
  Workpackage : mongoose.model('Workpackage', workpackageSchema),
}

