var img = document.querySelector("#main_img");

var mainImg = function () {
  img.src = "assets/succulents-2.jpg";
  setTimeout(mainImgAuto, 3000);
};

var emptyCart = function () {
  alert("Your Cart Is Empty!");
};

var mainImgAuto = function () {
  return (img.src = "assets/succulents-1.jpg");
};

var iAccept = function () {
  document.querySelector("#popup").remove();
};
