$(document).ready(function () {
  $(".clickable").on("click", function (event) {
    event.preventDefault();
    $(this).next().toggle();
    // $(this).css(".clickable span", "background-color: green;color: white;");
    $(this).find(">:first-child").css({
      "background-color": "green",
      color: "white",
    });
    if ($(this).next().css("display") == "none") {
      console.log("here");
      $(this).css("color", "black");
      $(this).find(">:first-child").css({
        "background-color": "transparent",
        color: "black",
      });
    }
  });
});
