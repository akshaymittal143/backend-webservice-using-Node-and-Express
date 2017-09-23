var  express=require('express');

var routes=function (Event) {
    var eventRouter = express.Router();

    eventRouter.route('/')
        .post(function (req, res) {
            var event = new Event(req.body);
            event.save();
            res.status(201).send(event);
        })
        .get(function (req, res) {
            var query = {};
            if (req.query.user) {
                query.user = req.query.user;
            }
            Event.find(query, function (err, events) {
                if (err)
                    res.status(500).send(err);
                else
                    res.json(events);
            });
        });

    eventRouter.route('/:eventId')
        .get(function (req, res) {

            Event.findById(req.params.eventId, function (err, event) {
                if (err)
                    res.status(500).send(err);
                else
                    res.json(event);

            });
        });
    return eventRouter;
};

module.exports=routes;