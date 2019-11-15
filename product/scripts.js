$(document).ready(function() {
  $("#btn").click(function() {
    $("#contact-form").show();
  });
  
  $("button#submitbtn").click(function() {
    let name = $("input#name").val();
    let number = $("input#number").val();
    let sanitary = $("#sanitary:checked").val();

    if (name == "" || number == "" || sanitary == "") {
      alert("Please provide your correct name and phone number");
    } else {
      alert(
        "Hey " +
          name +
          ", thank you for contacting us, your request for " +
          sanitary +
          " will receive an SMS notifiction soon for the pickup"
      );
    }
  });
});
