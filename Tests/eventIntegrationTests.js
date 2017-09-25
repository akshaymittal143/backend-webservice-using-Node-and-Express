var should=require('should'),
    request= require('supertest'),
    app=('../app.js'),
    mongoose=require('mongoose'),
    Event=require('../models/eventModel'),
    agent=request.agent(app);


describe('Event Crud Test', function () {
    it('Should allow Event to be Posted and return an _id', function (done) {
        var eventPost={'user': 'Health',
            'type': 'comment',
            'comment': 'this is supertest',
            'date': '2017-09-24T22:02:43.172Z'};

        agent.post('/events')
            .send(eventPost)
            .expect(200)
            .end(function (err,results) {

                results.body.should.have.property('_id');
                done(err);
            })
    });

    afterEach(function (done) {
        Event.remove().exec();
        done();
    })
});

