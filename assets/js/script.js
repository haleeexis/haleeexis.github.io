$(document).ready(function () {
  $(".clickable").on("click", function (event) {
    event.preventDefault();
    $(this).next().toggle();
    // $(this).css(".clickable span", "background-color: green;color: white;");
    $(this).find(">:first-child").css({
      "background-color": "black",
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

  $(".clickable span").hover(
    function () {
      $(this).css({
        "background-color": "black",
        color: "white",
      });
    },
    function () {
      if ($(this).parent().next().css("display") == "none") {
        $(this).css({
          "background-color": "transparent",
          color: "black",
        });
      }
    }
  );
});
