// Business Logic //

exports.Journal = function(title, body){
  this.title = title;
  this.body = body;
};


exports.Journal.prototype.read = function() {
  return "The title you picked is " + this.title + "and your post " + this.body;
};


exports.Address = function(name, street, city, state, zipcode){
  this.name = name;
  this.street = street;
  this.city = city;
  this.state = state;
  this.zipcode = zipcode;
};

exports.Address.prototype.read = function(){
  return "Hi " + this.name + ". Your address is " + this.street + this.city + this.state + this.zipcode;
};
