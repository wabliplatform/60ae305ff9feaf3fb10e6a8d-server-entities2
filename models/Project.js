
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const projectSchema = new Schema({
Underscoreid:String , 

projectName:String , 

projectDesc:String , 


projectWP:
{
type: Schema.Types.ObjectId,
ref:'Workpackage'
} 

})

module.exports = {
  Project : mongoose.model('Project', projectSchema),
}

