var mongoose=require('mongoose');
var Schema = mongoose.Schema;
var schema= new Schema({
"Employee Name":{type:String, required:true},
"Project Name":{type:String,required:true},
"Training Period":{type:String,required:true},
"Team Leader":{type:String,required:true},
"HR":{type:String,required:true}
});

module.exports=mongoose.model('employeedetails',schema)
