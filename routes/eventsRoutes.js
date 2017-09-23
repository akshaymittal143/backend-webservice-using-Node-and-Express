var  express=require('express');

var routes=function(Event) {
    var eventRouter = express.Router();

    eventRouter.route('/')
        .post(function (req, res) {
            var event = new Event(req.body);
            event.save({
                date: Event.date || 'Default date',
                user: Event.user || 'Default user',
                type: Event.type || 'Default type'
            });
            res.status(200);
            res.send(event);
        })
        .get(function (req, res) {
            var query = {};
            if (req.query.user) {
                query.user = req.query.user;
            }
            if(req.query.date)
            {
                query.date=req.query.date;
            }
            if(req.query.from())

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