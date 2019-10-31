$(document).ready(function() {
  $("#step1button").click(function() {
    $("#step2button").removeClass(" btn-dark");
    $("#step2button").addClass(" btn-light");
    $("#step1button").addClass("btn-dark");

    $("#step1section").css("display", "block");
  });

  $("#step2button").click(function() {
    $("#step1button").removeClass(" btn-dark");
    $("#step1button").addClass(" btn-light");
    $("#step2button").addClass("btn-dark");

    $("#step1section").css("display", "none");
  });
});