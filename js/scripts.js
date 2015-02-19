var Ticket = {
  price: function() {
    return this.selectedMovie + this.selectedTime + this.selectedAge;
  }
};

$(function() {
  $("form#movie-info").submit(function(event) {
    event.preventDefault();

    var ticket = Object.create(Ticket);

    ticket.selectedMovie = parseInt($("input[name=movie]:radio:checked").val());
    ticket.selectedTime = parseInt($("input[name=time]:radio:checked").val());
    ticket.selectedAge = parseInt($("input[name=age]:radio:checked").val());
    // var ticketPrice = selectedMovie + selectedTime + selectedAge

    $(".ticketprice").show();
    $("#result").text("$ " + ticket.price());
  });
});
