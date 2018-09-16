
function show () {




var bike1 = {
  company: " ",
  type: " ",
  engine: "600",
  color: "red",
  sits: "2",
  picture: "https://www.publicdomainpictures.net/pictures/190000/velka/red-ducati-motorcycle.jpg",
};

var bike2 = {
  company: " ",
  type: " ",
  engine: "700",
  color: "blue",
  sits: "4",
  picture: "http://womensridingboots.org/wp-content/uploads/2018/08/blue-ferrari-cars-wallpapers-hd-free-download-lovely-blue-ferrari-488-spider-2016-hd-wallpapers-new-hd-wallpapers-of-blue-ferrari-cars-wallpapers-hd-free-download.jpg",
};

var bike3 = {
  company: " ",
  type: " ",
  engine: "800",
  color: "green",
  sits: "5",
  picture: "https://vignette.wikia.nocookie.net/disneyfanon/images/e/e2/Green-Cars-Nice-_18.jpg/revision/latest/scale-to-width-down/640?cb=20130518192726",
  
};

var bike4 = {
  company: " ",
  type: " ",
  engine: "800",
  color: "yellow",
  sits: "5",
  picture: "http://images.mid-day.com/images/2016/feb/Sport-car-1.jpg",
  
};




var catEngine = document.getElementById("engine").value;

var colorRed = document.getElementById("red").cheked;
var colorBlue = document.getElementById("blue").cheked;
var colorGreen = document.getElementById("green").cheked;
var colorYellow = document.getElementById("yellow").cheked;

var sits = document.getElementById("s").value;



if (catEngine = 600) {

  if (colorRed == true && colorBlue == false && colorGreen == false && colorYellow == false) 
  {
    if (sits = "2") {document.getElementById("showdiv").innerHTML = "company:" + bike1 ;}
    else {document.getElementById("showdiv").innerHTML = "sorry, nothing found";}
  }
  else {document.getElementById("showdiv").innerHTML = "sorry, nothing found";}
} 

if (catEngine = 700) {

  if (colorRed == false && colorBlue == true && colorGreen == false && colorYellow == false) 
  {
    if (sits = "4") {document.getElementById("showdiv").innerHTML = bike2;}
    else {document.getElementById("showdiv").innerHTML = "sorry, nothing found";}
  }
  else {document.getElementById("showdiv").innerHTML = "sorry, nothing found";}
} 

if (catEngine = 800) {

  if   (sits = "5") 
  {
    if  (colorRed == false && colorBlue == false && colorGreen == true && colorYellow == false) {document.getElementById("showdiv").innerHTML = bike3;}
    else {document.getElementById("showdiv").innerHTML = "sorry, nothing found";}
  }
  else {document.getElementById("showdiv").innerHTML = "sorry, nothing found";}
} 

if (catEngine = 800) {

  if   (sits = "5") 
  {
    if  (colorRed == false && colorBlue == false && colorGreen == false && colorYellow == true) {document.getElementById("showdiv").innerHTML = bike4;}
    else {document.getElementById("showdiv").innerHTML = "sorry, nothing found";}
  }
  else {document.getElementById("showdiv").innerHTML = "sorry, nothing found";}
} 


}
