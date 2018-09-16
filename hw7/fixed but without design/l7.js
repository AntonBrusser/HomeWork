{


 /*   function alertHW () {

        alert ("hello world");

    }


alertHW();
alertHW();


function alertHW () {

    alert ("hello world");

}


alertHW();
alertHW();
*/


/*
function myfunc1(str){
alert (str.slice(0,1));
}

function myfunc2(str){
    var x = str.length-1;
    alert(str.charAt(x));
}

function myfunc3(str){
    var x = str.length/2;
      alert (str.charAt(x));
}

function avera(str){
    var a = str.charAt(0)+str.charAt(1)+str.charAt(2)/3;
    alert (a);
}

myfunc1 ("hahaha");
myfunc2 ("hahaha");
myfunc3 ("svcollege");
*/

/*
function AVG (num1, num2 , num3){
   var avg = (num1 + num2 + num3)/3;
   alert (avg);
}

function index ( num4, num5, str1) {
var sli = str1.slice (num4,num5);
alert (sli);

}

AVG (1 , 2 , 3 );
index (2 , 3 , "lalalalal");
*/
/*
function funcOne () {
    alert ("welcom to my website");
}
*/


/*
function txt() {
    var inputV = document.getElementById("aaa").value;
    var len  = inputV.length;
    document.getElementById("t1").innerHTML=len;


}
*/


function av() {
    var input1 =parseInt( document.getElementById("one").value);
      
    var input2 = parseInt(document.getElementById("two").value);
      
    var input3 =parseInt( document.getElementById("three").value);
      
    var ave = (input1+input2+input3)/3;

    document.getElementById("av1").innerHTML=ave;
}












}