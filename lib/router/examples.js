Meteor.startup(function (){

  Router.route('/latency-compensation', {
    name: 'latency_compensation',
    template: 'LatencyCompensation'
  });

});