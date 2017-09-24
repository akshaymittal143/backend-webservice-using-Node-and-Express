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
        events: [{type: mongoose.Schema.ObjectId, ref: 'Event'}],
        enters: Number,
        leaves: Number,
        comments:Number,
        highfives: Number

    });

module.exports=mongoose.model('Summary', summarySchema);
module.exports=mongoose.model('Event', eventModel);
