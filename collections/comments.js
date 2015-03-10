Comments = new Mongo.Collection('comments');

Comments.allow({
  insert: function () {
    if(Meteor.isServer) {
      Meteor._sleepForMs(2000);
    };
    return false;
  }
});

Meteor.methods({
  addCommentLC: function (text) {
    if (Meteor.isServer) {
      Meteor._sleepForMs(2000);
    };
    Comments.insert({text: text});
  },

  addCommentNoLC: function (text) {
    if(Meteor.isServer) {
      Meteor._sleepForMs(2000);
      Comments.insert({text: text});
    };
  }
});
