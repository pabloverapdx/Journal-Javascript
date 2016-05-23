// Business Logic //

exports.Journal = function(title, body){
  this.title = title;
  this.body = body;
};


exports.Journal.prototype.read = function() {
  return "The title you picked is " + this.title + "and your post " + this.body;
};
