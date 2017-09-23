var mongoose=require('mongoose');

var Schema=mongoose.Schema;

var eventModel=new Schema(
    {
        date: {type: Date},
        user: {type: String},
        type: {type: String, enum:["enter", "comment", "highfive", "leave"]},
        comment: {type: String, select: false},
        otheruser: {type: String, select: false}
    });



module.exports=mongoose.model('event', eventModel);
