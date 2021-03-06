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

    var from=new Date(req.query.from);
    var to=new Date(req.query.to);

    Event.find({date: { $gte:from ,$lte: to}}, function(err, result){
        if (err)
            res.send(err);
            res.json(result);
        });

    };


exports.create_a_event=function (req,res) {


    var new_event=new Event(req.body);
    if(!req.body.user) //for Mocha test
    {
        res.status(400);
        res.send('User is required');
    }
    else {
        new_event.save(function (err, event) {
            if (err)
                res.send(err);
            res.json(event);
        });
        res.status(200);
    }
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
   // var collection=Event.collection('eventAPI');
    //var query={};

        Event.remove({}, function (err, event) {
                if (err) {
                    res.send(err);
                }
                console.log(obj.event.n + "document(s) deleted");
                res.json({message: 'All events clear'});
        });
};

exports.get_summary=function (req,res) {
    Summary.find({},function (err,summary) {
        if(err)
            res.send(err);
            res.json(summary);
    }).populate('Event').exec(function (err,result) {
        return callback(null,null);
    });
};