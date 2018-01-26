const mainImgID = document.querySelector('#mainImgID');
const imgs = document.querySelectorAll('.imgs');

imgs.forEach(img =>
  img.addEventListener('click', e => (mainImgID.src = e.target.src)));

let winePics = [];
let time = 4000;
let pic = 0;

winePics[0] = "boldred.jpg" //Dry White
winePics[1] = "dessert.jpg" //Sweet White
winePics[2] = "drywhite.jpg" //Rich White
winePics[3] = "lightred.jpg" //Sparkling
winePics[4] = "mediumred.jpg" //Light Red=
winePics[5] = "richwhite.jpg"//Medium Red
winePics[6] = "sparkling.jpg" //Bold Red
winePics[7] = "sweetwhite.jpg" //dessert wine
let winePicSlide = document.querySelector('.winePics');
// winePicSlide.src = winePics[pic];
function slide(){
   winePicSlide.src = winePics[pic];
   if(pic < winePics.length-1){
     pic++
   } else {
     pic = 0
   }
}
// setInterval(slide, time);


// window.onload = slide();
