var mat = [[1,2,3]
              ,[4,5,6]
              ,[7,8,9]];
debugger;
myMatrix(mat);

function myMatrix(mat)
{
    var biggestCol=0;
    var biggestSum = 0;
    var tempSum=0;
    for(var i=0;i<3;i++){
        biggestSum+=mat[i][0];
    }



  for(var col=0;col<3;col++){
    for(var row=0;row<3;row++){
        tempSum+=mat[row][col];
    }
    if(tempSum>biggestSum){
        biggestSum=tempSum;
        biggestCol=col;
    }
    tempSum=0;
  }

return biggestCol;


}


debugger;
matAVG(mat);

function matAVG(mat)
{
    var sum=0;
    var row = 0;
    var col = 0;


    for (row = 0;row<mat.length;row++)
    {
        for (col = 0; col<mat.length; col++)
        {
            sum = sum + mat[row][col];
        }
    } 
    var num = row*col;
    var avg = sum/num;

    return avg;
}



var matrix = [[1,2,3]
           ,[4,5,6]
           ,[7,8,9],
            [2,2,1]];
var number=2;

debugger;
matChackHowMuch(matrix,number);

function matChackHowMuch(matrix,number)
{
    var row = 0;
    var col = 0;
    var count = 0;

    for (row = 0;row<matrix.length;row++)
    {
        for (col = 0; col<mat.length; col++)
        {
            if (matrix[col][row] == number)
              {
                  count ++ ;
              }
        }
    } 
    
    return count;

}



debugger;
isZero(mat);


function isZero(mat)
{
    var row = 0;
    var col = 0;

    for (row = 0;row<mat.length;row++)
    {
        for (col = row+1; col<mat.length; col++)
        {
            if (mat[col][row] || 0)
              {
                  return false ;
              }
        }
    } 

    return true;
}





debugger;
sortMat(mat);

function sortMat(mat)
{
    var row = 0;
    var col = 0;

    for (row = 0;row<mat.length;row++)
    {
        sortMat(mat[row]);
    } 

    return mat;
}


debugger;
spin90(mat);

function spin90(mat)
{
    var row = 0;
    var col = 0;
    var swichMat;

    for (row = 0;row<mat.length;row++)
    {
        for (col = 0; col<mat.length; col++)
        {
            swichMat = mat[col][row];
        }
    } 

    return swichMat;
}

