'use strict';

var mongoose=require('mongoose'),
    Event=mongoose.model('Event');

exports.list_all_events=function (req,res) {
    Event.find({}, function (err, event) {
        if(err)
            res.send(err);
        res.json(event);
    })
}


exports.create_a_event=function (req,res) {
    var new_event=new Event(req.body);
    new_event.save(function (err, event) {
        if(err)
            res.send(err);
            res.json(event);
    });
};

exports.read_a_event=function (req,res) {
    Event.findById(req.params.eventId,function (err, event) {
        if(err)
            res.send(err);
            res.json(event);
    });
};

exports.delete_a_event=function (req,res) {
    Event.remove({
        _id: req.params.eventId
    }, function (err, event) {
        if(err)
            res.send(err)
        res.json({message: 'Task Sucessfully deleted'});
    });

};