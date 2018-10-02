function doubleNumbers()
{
    var printMe = " ";
    var i = 50;
    while (i<=350)
    {
        if (i%2 == 0) { printMe += " " + i ;}
        else { printMe += "";}
    i++;

    }

document.getElementById("javadiv1").innerHTML = printMe;
}

function randBetween()
{

var res = Math.floor(Math.random()*1000-0)+0;
document.getElementById("randNum").innerHTML = res
}


    //   הצלחתי

function upsidDown()
{
    var str = document.getElementById("randNum").innerHTML;
    var len  = str.length;
    var txt = " ";
    
   
    
    for (i = len-1 ; i>=0 ; i--)
      {
      txt = txt +  str.charAt(i);  
       
      }
      document.getElementById("randNum").innerHTML = (txt);
      
}


    //   הצלחתי

function checkHowMutch()
{
    var num = document.getElementById("fullNum").value;
    var index = num.length ; 
if (num%1 > 0) {  document.getElementById("text1").innerHTML ="undefined" &&  alert ("type only full numbers pleas!")  ;}
else {document.getElementById("text1").innerHTML = index + " " +"digits";}
}


//   לא הצלחתי



function spinner()
{


//                 אם אני עושה את הזה בצורה הבאה - אז האתר קורס

//     var res = 0;
//     var biggest = 0;

//     while (res >= 0 && res >= biggest)
//     {
//         var res = (-10000) + Math.floor(Math.random()*20000-0)+0;
//         if ( res <= 0)
//         {
//             res = 0;
//         }
//         if (res > biggest)
//         {
//             res = biggest;
//         }
    
//     }
// document.getElementById("spinNum").innerHTML = res;
// document.getElementById("chackNum1").innerHTML = biggest;



//      :ולכן עשיתי ככה למרות שזה לא עובד טוב
var res = (-10000) + Math.floor(Math.random()*20000-0)+0;
var biggest = 0;  


    if (res>=0 && res > biggest)
    {

    biggest = res;
    document.getElementById("spinNum").innerHTML = res;
    document.getElementById("chackNum1").innerHTML = biggest;
    }

        if ( res < 0)
        {
         document.getElementById("chackNum1").innerHTML = 0;
         document.getElementById("spinNum").innerHTML = 0;
         }
}






    //  הצלחתי אבל רק עם אות גדולה אחת בגלל שזה בתוך הלופ ואם אני מוציא את זה מתוך הלופ זה ידלג לי על הלופ עצמו.

function spacer()
{
    var something = document.getElementById("noSpace").value;
    var i;
    for(i=0;i<something.length;i++)
    {
        var something = document.getElementById("noSpace").value;
        if(something.charAt(i)==" ")
        {
         document.getElementById("spaceWord").innerHTML = "NULL";
        }
          else  if (something.charAt(i) >= 'A' && something.charAt(i)<= 'Z')
            {
               newSomething = something.replace(something.charAt(i), "     " + something.charAt(i));
              
            }
        
    }
    document.getElementById("spaceWord").innerHTML = newSomething 
}







//   הצלחתי

function polifunc()
{

    

    var pol = document.getElementById("polindrom").value;
    var i;
    var len = pol.length-1;
    for (i=0  ; i < pol.length ; i++ )
    {
        if (pol.charAt(i) == pol.charAt(len-i))
         {
             document.getElementById("poliText").innerHTML = "TRUE";
         }
        else
        {
            document.getElementById("poliText").innerHTML = "FALSE";
        }
    }

}







//   לא מצליח לגרום לו להיכנס ללולאה , כאילו מדלג עליה.

function sortMe() 
{
var items = document.getElementById("str7").value;
        var length = items.length;
        var i;
        var j;
        for (i = 0; i < length; i++) 
        { 
          for ( j = 0; j < (length - i - 1); j++)
           {
            
            if (items[j] > items[j + 1])
             {
              
              var tmp = items[j];
              items[j] = items[j + 1]; 
              items[j + 1] = tmp; 
            }
          }

        }
      
      
       
      
      document.getElementById("sorted").innerHTML = items;

}
    
    
  









//  הצלחתי

function find()
{

    

    var tBig = document.getElementById("strBig").value;
    var tSmall = document.getElementById("strSmall").value;
    

    var i;
    var t;
    var x;
    for ( i = 0, x=0 ;  i< tBig.length; i++)
    {
         

        if (tBig.substr(i,tSmall.length) == tSmall)
         {
             x ++
        }
        
    }
    document.getElementById("found").innerHTML = x;
    
}


















// לא עובד במקרים שבהם הסיפרה חוזרת על עצמה פעמיים אחת אחרי השניה




function findNumbers()
{
    var str = document.getElementById("noNums").value;
    var i;
    var t;
    for(i=0 ;  i<str.length ; i++)
    {
        if (str.charAt(i) >= 0 && str.charAt(i) <= 9 )
         {
              str =str.replace(str[i],"") ;
              
         }
    }

    document.getElementById("numles").innerHTML = str;
    
    
}


