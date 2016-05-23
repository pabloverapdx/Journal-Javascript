(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
// User Interface //
var Address = require ('./../js/journal.js').Address;
var Journal = require ('./../js/journal.js').Journal;
  $(document).ready (function(){
  $('#title').submit(function(event) {
    event.preventDefault();

    var titleMessage = $("#user-title").val();
    var bodyMessage = $('#user-message').val();

    var newJournal = new Journal(titleMessage, bodyMessage);
    $('#solution').append(newJournal.read()); // if i want this to print to the console change this line to console.log(newJournal.read)
  });
  $('#address').submit(function(event) {
    event.preventDefault();

    var userName = $("#userName").val();
    var userStreet = $("#userStreet").val();
    var userCity = $("#userCity").val();
    var userState = $("#userState").val();
    var userZip = $("#userZip").val();

    var newAddress = new Address(userName, userStreet, userCity, userState, userZip);
      $('#solution2').append(newAddress.read());
  });
  $('#submit2').click(function(){
    $('#address').hide();
  });
});

},{"./../js/journal.js":1}]},{},[2]);
