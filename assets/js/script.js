$(document).ready(function () {
  $(".clickable").on("click", function (event) {
    // event.stopPropagation();
    // event.stopImmediatePropagation();
    event.preventDefault();
    $(this).next().toggle();
    $(this).css("color", "#228B22");
    if ($(this).next().css("display") == "none") {
      console.log("here");
      $(this).css("color", "black");
    }

    // The same works with hidden
  });
});
