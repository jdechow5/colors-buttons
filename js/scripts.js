$(document).ready(function() {
  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("widthClass");
    $("body").addClass("green-background");
  });

  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });

  $("button#dark").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-background");
    $("#dark").toggle();
    $("#light").toggle();
  });

  $("button#light").click(function() {
    $("body").removeClass();
    $("#dark").toggle();
    $("#light").toggle();
  });

});
