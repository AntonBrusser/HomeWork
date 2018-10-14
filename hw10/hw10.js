



function maxArray()
{
var arr  = [];
var number = document.getElementById("txt").value;
var i;
var j;
var arrcounter = [0,0,0,0,0,0,0,0,0,0];



for (i=0; i< number; i++)
{
     var res =  Math.floor(Math.random()*9-0)+0;
    arr.push(res);
}

for (j=0; j<number; j++)
       {
       arrcounter[arr[j]]++;

       }


var thePlace = Math.max.apply(null, arrcounter);

var maxmax = arrcounter.indexOf(thePlace);



document.getElementById("out").innerHTML = arr;
document.getElementById("out2").innerHTML = maxmax;
document.getElementById("out3").innerHTML = thePlace;

// alert (arr);
// alert (arrcounter);
// alert (thePlace);
// alert (maxmax);


}










