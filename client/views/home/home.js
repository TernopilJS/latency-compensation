Template.Home.events({
  'submit form[name="add-comment-lc"]': function (e, tmpl) {
    e.preventDefault();
    var text = $(e.target).find('.comment-text').val();
    $(e.target).find('.form-group').addClass('has-warning');
    Meteor.call('addCommentLC', text, function (err, res) {
      $(e.target).find('.form-group').removeClass('has-warning');
      console.log(err || res);
    });
  },
  'submit form[name="add-comment-no-lc"]': function (e, tmpl) {
    e.preventDefault();
    var text = $(e.target).find('.comment-text').val();
    $(e.target).find('.form-group').addClass('has-warning');
    Meteor.call('addCommentNoLC', text, function (err, res) {
      $(e.target).find('.form-group').removeClass('has-warning');
      console.log(err || res);
    });
  }
});

Template.Home.helpers({
  comments: function () {
    return Comments.find();
  }
});