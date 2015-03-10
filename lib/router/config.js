Meteor.startup(function (){

  Router.configure({
    layoutTemplate: 'Layout',
    templateNameConverter: 'upperCamelCase',
    routeControllerNameConverter: 'upperCamelCase',
  });

});