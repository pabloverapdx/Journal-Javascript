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
