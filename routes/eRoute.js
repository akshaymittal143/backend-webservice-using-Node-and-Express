'use strict'

module.exports=function (app) {
    var eventList=require('../controller/eventController');

    app.route('/events')
        .get(eventList.list_all_events)
        .post(eventList.create_a_event)


    app.route('/events/clear')
        .post(eventList.clear_events);

    app.route('/events/date')
        .get(eventList.filter_by_dates);

    app.route('/events/:eventId')
        .get(eventList.read_a_event)
        .delete(eventList.delete_a_event);

    app.route('/events/summary')
        .get(eventList.get_summary);

};

