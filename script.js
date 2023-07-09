var img = document.querySelector("#main_img");

// Function to set the main image and trigger auto-change after 3 seconds
var mainImg = function () {
  img.src = "assets/succulents-2.jpg";
  setTimeout(mainImgAuto, 3000);
};

// Function to display an alert indicating an empty cart
var emptyCart = function () {
  alert("Your Cart Is Empty!");
};

// Function to set the main image to the default image
var mainImgAuto = function () {
  return (img.src = "assets/succulents-1.jpg");
};

// Function to remove the popup element when the user accepts
var iAccept = function () {
  document.querySelector("#popup").remove();
};
