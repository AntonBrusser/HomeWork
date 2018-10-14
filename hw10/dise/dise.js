var image = document.getElementById("picture1");
var image2 = document.getElementById("picture2");




function rollTheDise()
{
    var arr = [];
    var num1 = 0;
    var num2 = 0;
   


    for (i=0; i< 2; i++)
    {
     var res =  Math.floor(Math.random()*6-1)+1;
    arr.push(res);
     }
num1 = arr[0] +1;
num2 = arr[1] +1;


document.getElementById("resault").innerHTML = num1+num2;

if (num1 == 1)
{
image.src = "1.jpg";
}

if (num1 == 2)
{
image.src = "2.jpg";
}

if (num1 == 3)
{
image.src = "3.jpg";
}
if (num1 == 4)
{
image.src = "4.jpg";
}
if (num1 == 5)
{
image.src = "5.jpg";
}
if (num1 == 6)
{
image.src = "6.jpg";
}



if (num2 == 1)
{
image2.src = "1.jpg";
}

if (num2 == 2)
{
image2.src = "2.jpg";
}

if (num2 == 3)
{
image2.src = "3.jpg";
}
if (num2 == 4)
{
image2.src = "4.jpg";
}
if (num2 == 5)
{
image2.src = "5.jpg";
}
if (num2 == 6)
{
image2.src = "6.jpg";
}



}

