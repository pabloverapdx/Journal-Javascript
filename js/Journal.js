// Business Logic //

exports.Journal = function(title, body){
  this.title = tittle;
  this.body = body;
};


exports.Journal.prototype.read = function() {
  return "The tittle you picked is " + this.title + "and your post " + this.body;
};
