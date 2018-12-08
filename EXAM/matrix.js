{
function showTheBigest(mat){ debugger;
    var row;
    var col;
    var resArr = [];
    var tempNum;
    
    var counter = 0;
    for(row = 0; row<mat.length; row ++){
        var bigestNum = mat[0][row];
        for(col = 0 ; col<mat.length; col++){
            tempNum = mat[col][row];
            if (tempNum >= bigestNum){
                bigestNum = tempNum ;
            }
            resArr[row] = bigestNum;
        }
    }
    for (col = 0; col<mat.length; col ++){
        for(row = 0 ; row<mat.length; row++){
            
                if (row > col){
                    counter += mat[col][row];
                }
            
            
        } 
    }
console.log(counter);
return resArr = [];

}





    const test1=[
        [1,2,3,4],
        [22,3,1,6],
        [5,7,2,3],
        [44,1,2,3]
    ];

    const test2=[
        [-1,-2,-3,-4,-21],
        [-22,-3,10,-6,-20],
        [-5,-7,-2,-3,-3],
        [-44,-1,-2,-3,-0.001],
        [0,-5,-200,-2,-1]
    ];

   

    showTheBigest(test1);
    showTheBigest(test2);
}


