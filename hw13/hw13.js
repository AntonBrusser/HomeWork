{




$(document).ready(function() {

    $("#button0").click (function() {

             
var t1 = document.getElementById("temp1").value;
var t2 = document.getElementById("temp2").value;
var t3 = document.getElementById("temp3").value;
                
                  
                      $("#red1").animate({
                          width: t1+"px",
                      },3000);

                      $("#green1").animate({
                        width: t2+"px",
                    },5000);

                    $("#yellow1").animate({
                        width: t3+"px",
                    },7000);




                      });
                    });



}
