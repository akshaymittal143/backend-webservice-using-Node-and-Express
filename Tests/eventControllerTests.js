var should=require('should'),
    sinon=require('sinon');


describe('Event Controller Tests:', function () {
    describe('Post', function () {
        it('should not allow an empty User on Post',function () {
            var Event=function(event) {this.save=function(){}};

            var req= {
                body:{
                        user:'Akshay'
                     }
            };

            var res={
                status: sinon.spy(),
                send: sinon.spy(),
                json: sinon.spy()
            };
            var eventController=require('../controller/eventController');

            eventController.create_a_event(req,res)(Event);

            res.status.calledWith(400).should.equal(true, 'Bad status'+ res.status.args[0][0]);
            res.send.calledWith('User is required').should.equal(true);
        })
    })
});