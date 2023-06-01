console.log("Your script is loaded successfully!");

// CSS Selectors
// tagname = button
// id = #btn
// class = .btnClass
// [data=btn]

// DOM Manipulation using Browser API

// document.querySelector("#btn").addEventListener("click", function () {
//   document.querySelector("#onlineText").innerText = "You're online";
// });

// this ensures your code runs when the entire DOM is loaded
$(document).ready(function () {
  $("#btn").on("click", function () {
    $("#onlineText").text("You're online").css("color", "green");
  });
});
