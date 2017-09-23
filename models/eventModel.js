var mongoose=require('mongoose');

var Schema=mongoose.Schema;

var eventModel=new Schema(
    {
        date: {type: Date, default: Date.now()},
        user: {type: String},
        type: {type: String, enum:["enter", "comment", "highfive", "leave"]},
        comment: {type: String, select: false},
        otheruser: {type: String, select: false}
    });

var summarySchema=new Schema(
{
    date: [Date],
    enters: Number,
    leaves: Number,
    comments:Number,
    highfives: Number

});

var SummaryModel=mongoose.model('SummaryModel', summarySchema);

module.exports=mongoose.model('Event', eventModel);
