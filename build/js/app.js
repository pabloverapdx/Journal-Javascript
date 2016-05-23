(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// Business Logic //

exports.Journal = function(title, body){
  this.title = title;
  this.body = body;
};


exports.Journal.prototype.read = function() {
  return "The title you picked is " + this.title + "and your post " + this.body;
};

},{}],2:[function(require,module,exports){
// User Interface //
var Journal = require ('./../js/journal.js').Journal;
  $(document).ready (function(){
  $('#title').submit(function(event) {
    event.preventDefault();

    var titleMessage = $("#user-title").val();
    var bodyMessage = $('#user-message').val();

    var newJournal = new Journal(titleMessage, bodyMessage);
    $('#solution').append(newJournal.read());
  });
});

},{"./../js/journal.js":1}]},{},[2]);
