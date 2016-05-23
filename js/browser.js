// User Interface //
var Journal = require ('./../js/journal.js').Journal;

$(document).ready (function() {
  $('#title').submit(function(event) {
    event.preventDefault();

    var title = $("#user-title").val();
    var body-message = $('#user-message').val();

    var newJournal = new Journal(title, body-message);
    console.log(newJournal.read());
  });
});
