


function randFunc()
{
  
  
    var arr = [];
    var number =  6+ Math.floor(Math.random()*90-0)+0;
    var arr2 = []




    for (i=0; i< number; i++)
     {
     var res =  Math.floor(Math.random()*100-0)+0;
    arr.push(res);
      }


      document.getElementById("rand").innerHTML = arr;




      for (j=0; j< number; j++)
      { 
            for(var k = 2; k < arr[j]; k++)
             {
                if(arr[j] % k === 0) 
                    {
                    break;
                    }

                else
                     { 
                     arr.pop(arr[j] && arr2.push(arr[j]));
                     }

             }
           
      }

     
      for (z=0; z< arr2.length; z++)
      {
          if (arr2[z] = arr2[z+1])
          {
              arr2.pop(arr2[z+1]);
              
          }
      }


      document.getElementById("botomdiv").innerHTML = arr2;
}








