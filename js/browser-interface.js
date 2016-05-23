// User Interface //
var Journal = require ('./../js/journal.js').Journal;
  $(document).ready (function(){
  $('#title').submit(function(event) {
    event.preventDefault();

    var titleMessage = $("#user-title").val();
    var bodyMessage = $('#user-message').val();

    var newJournal = new Journal(titleMessage, bodyMessage);
    $('#solution').append(newJournal.read()); // if i want this to print to the console change this line to console.log(newJournal.read)
  });
});
