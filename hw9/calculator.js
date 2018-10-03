
var num1 = 0;
var num2 = 0;
var i = "";
var more = "";




function f1()
{
    
        


    document.getElementById("input").innerHTML += 1;
    more = more + 1;
    if (i = "") {num1 = num1 +  1;}
    else {num2  = num2 + 1;}
    
}
function f2()
{
    document.getElementById("input").innerHTML += 2;
    if (i = "") {num1 = num1 + 2;}
    else {num2  = num2 +2;}
    more = more + 2;
}
function f3()
{
    document.getElementById("input").innerHTML += 3;
    if (i = "") {num1 = num1 + 3;}
    else {num2 +3;}
    more = more + 3;
}
function f4()
{
    document.getElementById("input").innerHTML += 4;
    if (i = "") {num1 = num1 + 4;}
    else {num2 +4;}
    more = more + 4;
}
function f5()
{
    document.getElementById("input").innerHTML += 5;
    if (i = "") {num1 = num1 + 5;}
    else {num2 +5;}
    more = more + 5;
}
function f6()
{
    document.getElementById("input").innerHTML += 6;
    if (i = "") {num1 = num1 + 6;}
    else {num2 +6;}
    more = more + 6;
}
function f7()
{
    document.getElementById("input").innerHTML += 7;
    if (i = "") {num1 = num1 + 7;}
    else {num2 +7;}
    more = more + 7;
}
function f8()
{
    document.getElementById("input").innerHTML += 8;
    if (i = "") {num1 = num1 + 8;}
    else {num2 +8;}
    more = more + 8;
}
function f9()
{
    document.getElementById("input").innerHTML += 9;
    if (i = "") {num1 = num1 + 9;}
    else {num2 = num1  = num2 +9;}
    more = more + 9;
}
function f0()
{
    
    document.getElementById("input").innerHTML += 0;
    if (i = "") {num1 = num1 + 0;}
    else {num2 = num2 +0;}
    more = more + 0;
}





function fDelit()
{
    document.getElementById("input").innerHTML = "";
    i = "";
    more = "";
    
}




function fPart()
{
    document.getElementById("input").innerHTML = "/";
    i = "/";
    more = more + "/";

   
}
function fTimes()
{
    document.getElementById("input").innerHTML = "*";
    i = "*";
    more = more + "*";
    
    
}
function fMinus()
{
    document.getElementById("input").innerHTML = "-";
    i = "-";
    more = more + "-";
    
}
function fPlus()
{
    document.getElementById("input").innerHTML = "+";
    i = "+";
    more = more + "+";

    
    
}




function fEqual()
{
    
    if( i = "/") {  document.getElementById("input").innerHTML = parseInt(num1) / parseInt(num2) ;}
    else if ( i = "*") {  document.getElementById("input").innerHTML = parseInt(num1) * parseInt(num2) ;}
    else if ( i = "-") {  document.getElementById("input").innerHTML = parseInt(num1) - parseInt(num2) ;}
    else if ( i = "+") {  document.getElementById("input").innerHTML = parseInt(num1) + parseInt(num2) ;}


    document.getElementById("input").innerHTML = eval(more);
    more = document.getElementById("input").innerHTML;


   
    
}



