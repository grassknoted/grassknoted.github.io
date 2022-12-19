const image = document.querySelector("img");
if (Math.random() > 0.5) {
  main_picture = '/images/DP.jpeg'
  hover_picture = '/images/profile.png'
}
else {
  main_picture = '/images/profile.png'
  hover_picture = '/images/DP.jpeg'
}
console.log("Main Image", image)
image.setAttribute('src', main_picture);

function hover(element) {element.setAttribute('src', hover_picture); } 
function unhover(element) { element.setAttribute('src', main_picture); } 