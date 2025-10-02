// code to generate random number 
// take user input for min and max number
let randomNumber;
let MIN;
let MAX;


document.getElementById("generate").onclick=function(){
    MIN=document.getElementById("mininput").value;
    MAX=document.getElementById("maxinput").value;
    randomNumber=(Math.random()*(MAX-MIN)+MIN);
    ;
    document.getElementById("countLabel").innerHTML=randomNumber;
}


