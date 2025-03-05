// Get the image element
const myImage01 = document.getElementById("owl-slider-01");
const myImage02 = document.getElementById("owl-slider-02");
const myImage03 = document.getElementById("owl-slider-03");

// Define the image sources based on the screen width
const largeImage01 = "images use/slider/1.jpg"
const largeImage02 = "images use/slider/2.jpg"
const largeImage03 = "images use/slider/3.jpg"

const smallImage01 = "images use/slider/1small.jpg"
const smallImage02 = "images use/slider/2small.jpg"
const smallImage03 = "images use/slider/3small.jpg"

// Change the image source based on the screen width
function changeImageSource() {
  if (window.innerWidth < 1024) {
    myImage01.src = smallImage01;
    myImage02.src = smallImage02;
    myImage03.src = smallImage03;
  } else {
    myImage01.src = largeImage01;
    myImage02.src = largeImage02;
    myImage03.src = largeImage03;
  }
}

// Call the function to change the image source when the window is resized
window.addEventListener("resize", changeImageSource);

// Call the function initially to set the image source based on the screen width
changeImageSource();

// Get the "bottom" element
const bottom = document.getElementById("bottom");

// Check screen width and update content
if (window.innerWidth > 768) {
  bottom.innerHTML = "Hải Yến<span>&amp;</span>Hải Nam";
} else {
  bottom.innerHTML = "Hải Yến<br><span>&amp;</span><br>Hải Nam";
}