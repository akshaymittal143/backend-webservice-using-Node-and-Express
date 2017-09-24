'use strict';

var mongoose=require('mongoose'),
    Event=mongoose.model('Event'),
    Summary=mongoose.model('Summary');

exports.list_all_events=function (req,res) {
    Event.find({}, function (err, event) {
        if(err)
            res.send(err);
        res.json(event);
    }).sort({date: -1}).exec(function (err, events) {

    })
};

exports.filter_by_dates=function (req,res) {
    var from=new  Date(req.params.from);
    var to=new Date(req.params.to);

    Event.find({date: { $gte:from ,$lte: to}}, function(err, result){
        if (err)
            res.send(err);
            res.json(result);
        });

    };


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
            res.send(err);
        res.json({message: 'Task Sucessfully deleted'});
    });

};

exports.clear_events=function (req,res) {
    var collection=Event.collection('eventAPI');
    var query={};
        collection.deleteMany(query, function (err, event) {
            if (err)
                res.send(err);
                console.log(obj.event.n + "document(s) deleted");
                res.json({message: 'All events clear'});
        });

};

exports.get_summary=function (req,res) {
    Summary.find({},function (err,summary) {
        if(err)
            res.send(err);
            res.json(summary);
    });
};