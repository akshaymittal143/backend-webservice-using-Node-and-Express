var mongoose=require('mongoose');

var Schema=mongoose.Schema;

var summarySchema=new Schema(
    {
        date: [Date],
        enters: Number,
        leaves: Number,
        comments:Number,
        highfives: Number

    });

module.exports=mongoose.model('SummaryModel', summarySchema);