function bomb()
{

alert ((74/10).toPrecision(1));

    var i = 0 ;

while (i<=100) {  document.getElementById("str").innerHTML += "<br>"+ i ; i++ ; 



if (  i%10 == 7) {document.getElementById("str").innerHTML +="<br>"+ "boom"; i++ ;}

if (  i%7 == 0) {document.getElementById("str").innerHTML +="<br>"+ "boom"; i++ ;}

if ( (i/10).toPrecision(1) == 7 ) {document.getElementById("str").innerHTML +="<br>"+ "boom"; i++ ;}






}







}