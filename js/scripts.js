

$(function() {
  $("form#movie-info").submit(function(event) {
    event.preventDefault();

    var selectedMovie = parseInt($("input[name=movie]:radio:checked").val());
    var selectedTime = parseInt($("input[name=time]:radio:checked").val());
    var selectedAge = parseInt($("input[name=age]:radio:checked").val());
    var ticketPrice = selectedMovie + selectedTime + selectedAge
    debugger;
  });
});
