
function isSuducuTrue(mat)
{
    var row = 0;
    var col = 0;

    var monim1 = [0,0,0,0,0];
    var monim2 = [0,0,0,0,0];
    var monim3 = [0,0,0,0,0];
    var monim4 = [0,0,0,0,0];

    var sudu1 = [mat[0][0],mat[0][1],
                 mat[1][0],mat[1][1]];

    var sudu2 =  [mat[0][2],mat[0][3],
                  mat[1][2],mat[1][3]];

    var sudu3 =  [mat[2][0],mat[2][1],
                  mat[3][0],mat[3][1]];

    var sudu4 =  [mat[2][2],mat[2][3],
                  mat[3][2],mat[3][3]];

    for (row = 0; row<2;row++)
    {
        for (col = 0; col<2; col++)
        {
            monim1[  sodu1[row][col] ] ++
        }
    }
    for (row = 0; row<2;row++)
    {
        for (col = 0; col<2; col++)
        {
            monim2[  sodu2[row][col] ] ++
        }
    }
    for (row = 0; row<2;row++)
    {
        for (col = 0; col<2; col++)
        {
            monim3[  sodu3[row][col] ] ++
        }
    }
    for (row = 0; row<2;row++)
    {
        for (col = 0; col<2; col++)
        {
            monim4[  sodu4[row][col] ] ++
        }
    }

    if (monim1 == [1,1,1,1] && monim2 == [1,1,1,1] && monim3 == [1,1,1,1] && monim4 == [1,1,1,1])
    {
         
        var monimX1 = [0,0,0,0]
        row = 0;
        col = 0;

        for (col = 0; col < 8; col++)

        {
          monimX1 [mat[col]]++
        }

    }






    
}