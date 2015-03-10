Template.Header.helpers({
  activeRouteClass: function(name) {
    var args = Array.prototype.slice.call(arguments, 0);
    var active = _.any(args, function(name) {
      return Router.current() && Router.current().route.getName() === name;
    });
    return active && 'active';
  },
});