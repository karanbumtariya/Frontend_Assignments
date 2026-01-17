$(document).ready(function () {

  let products = [
    "Apple iPhone",
    "Samsung Galaxy",
    "OnePlus Nord",
    "Redmi Note",
    "Realme Narzo",
    "Vivo V Series",
    "Oppo Reno",
    "Nokia Smartphone",
    "Google Pixel",
    "Motorola",
    "Poco"
  ];

$("#search").keyup(function () {
  let searchText = $(this).val().toLowerCase();
  $("#result").empty();

  products.forEach(function (item) {
    if (item.toLowerCase().includes(searchText)) {
      $("#result").append("<li>" + item + "</li>");
    }
  });

  if ($("#result li").length === 0 && searchText !== "") {
    $("#result").append("<li>No result found</li>");
  }
});

$(document).on("click", "#result li", function () {
  $("#search").val($(this).text());
  $("#result").empty();
});

});
