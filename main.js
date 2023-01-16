function preload(){}
random = "true";

function setup(){
   canvas = createCanvas(640, 480)
   canvas.position(550, 10)
   video = createCapture(VIDEO);
   video.hide();

   tint_color = ""
}

function draw(){
   image(video, 0, 0, 640, 480)

   if (random == "true"){
   tint(tint_color[0], tint_color[1], tint_color[2])
   }else{
   tint(tint_color)
   }
}

function take_snapshot(){
   save("tintFilterImage.png")
}

var interval = setInterval(random_tint, 500)
function filter_tint(){
   clearInterval(interval);
   random = "false";
   tint_color = document.getElementById("color_name").value;
}

function random_tint(){
  r = Math.floor(Math.random() * 256)
  g = Math.floor(Math.random() * 256)
  b = Math.floor(Math.random() * 256)
  tint_color = [r, g, b]
}