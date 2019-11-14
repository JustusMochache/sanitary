$(document).ready(function() {
  $("#btn").click(function() {
    $("#contact-form").show();
  });

  var name = $("input#name").val();
  var number = $("input#number").val();
  var sanitary = $("#sanitary:checked").val();

    $("#contact-form").submit (function(event) {
      if ($("input#name").val() && $("input#number").val()) {
        alert("Hey " + name + ", thank you for contacting us, your request for " 
        +  sanitary  + "  will receive an SMS notifiction soon for the pickup"
        );
      } else {
        alert("Please provide your correct name and phone number");
      }
    });
  });
