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
