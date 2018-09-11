// סעיף 1


function positive()
{
    var str1 = parseInt( document.getElementById("aleft").value);
    
    if (str1 < 0) {
        document.getElementById("pos").innerHTML ="negative";
    }
    else {
        document.getElementById("pos").innerHTML ="positive";
    }

}

    
function double()
{
    var str1 = document.getElementById("aleft").value;
    var num1 = str1.length-1;
    var digit = str1.charAt(num1);
    if (digit == 0 || digit == 2 || digit == 4 || digit == 6 || digit == 8 ) {document.getElementById("pos").innerHTML ="double";}
    else {document.getElementById("pos").innerHTML ="odd";}
}








        // סעיף 2

function capitals()
{
    var str = document.getElementById("bett").value;
    var newStr = str.length;
    if (newStr > 1) {document.getElementById("oneLetter").innerHTML = "too mutch";} 

    if (str == "A" || str == "B" || str == "C" || str == "D" || str == "E" || str == "F" || str == "G" || str == "H" || str == "I" || str == "J" || str == "K" || str == "L" || str == "M" || str == "N" || str == "O" || str == "P" || str == "Q" || str == "R" || str == "S" || str == "T" || str == "U" || str == "V" || str == "W" || str == "X" || str == "Y" || str == "Z" )
    {document.getElementById("oneLetter").innerHTML = "CAPITALS";}
    if (str == "a" || str == "b" || str == "c" || str == "d" || str == "e" || str == "f" || str == "g" || str == "h" || str == "i" || str == "j" || str == "k" || str == "l" || str == "m" || str == "n" || str == "o" || str == "p" || str == "q" || str == "r" || str == "s" || str == "t" || str == "u" || str == "v" || str == "w" || str == "x" || str == "y" || str == "z" )
    {document.getElementById("oneLetter").innerHTML = "lowers";}

}


              // סעיף 3

function whoIsLong()
{
    var strR = document.getElementById("gimelt1").value;
    var strL = document.getElementById("gimelt2").value;
    var numR = strR.length;
    var numL = strL.length;
    if (numR > numL) {document.getElementById("longL").innerHTML = "The Longest"; document.getElementById("longR").innerHTML = " "; }
    if (numL > numR) {document.getElementById("longR").innerHTML = "The Longest"; document.getElementById("longL").innerHTML = " "; }
    if (numL == numR) {document.getElementById("longR").innerHTML = " "; document.getElementById("longL").innerHTML = " ";  }
}
                    // לא הצלחתי
function stringCut()
{
    var strR = document.getElementById("gimelt1").value;
    var strL = document.getElementById("gimelt2").value;
    var numR = strR.length;
    var numL = strL.length;
    var cutR = numR - numL;
    var cutL = numL - numR;
    var strNewR = strR.slice(0,cutR);
    var strNewL = strL.slice(0,cutL);
    if (numR > numL) {  document.getElementById("gimelt1").innerHTML = strNewR;  }
    if (numR < numL) {  document.getElementById("gimelt2").innerHTML = strNewL;  }
}

                
                // סעיף 4

function polindrom()
{
  var num =  document.getElementById("dalett").value ;
  var a = num.charAt(0);
  var b = num.charAt(1);
  var c = num.charAt(2);
  var d = num.charAt(3);
  if (a == d && b == c) {document.getElementById("YN").innerHTML = "yes" ;}
  else { document.getElementById("YN").innerHTML = "no";}
}




