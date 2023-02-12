var random=(Math.floor(Math.random()*6 +1));
var imageSource="dice"+random+".jpg";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",imageSource);



var random2=(Math.floor(Math.random()*6 +1));
var imageSource2="dice"+random2+".jpg";
var image2=document.querySelectorAll("img")[2];
image2.setAttribute("src",imageSource2);


var random3=(Math.floor(Math.random()*6 +1));
var imageSource3="dice"+random3+".jpg";
var image3=document.querySelectorAll("img")[4];
image3.setAttribute("src",imageSource3);



var random4=(Math.floor(Math.random()*6 +1));
var imageSource4="dice"+random4+".jpg";
var image4=document.querySelectorAll("img")[5];
image4.setAttribute("src",imageSource4);



var random5=(Math.floor(Math.random()*6 +1));
var imageSource5="dice"+random5+".jpg";
var image5=document.querySelectorAll("img")[7];
image5.setAttribute("src",imageSource5);


var random6=(Math.floor(Math.random()*6 +1));
var imageSource6="dice"+random6+".jpg";
var image6=document.querySelectorAll("img")[9];
image6.setAttribute("src",imageSource6);


function refresh() {
    window.location.reload();
}


result1=random+random2+random3;
result2=random4+random5+random6;


if(result1>result2) {
    document.querySelector("h1").innerHTML="Player1 Wins";
}
else if(result2>result1) {
    document.querySelector("h1").innerHTML="Player2 Wins";
}
else{
    document.querySelector("h1").innerHTML="It's a draw";
}


console.log(result1);
console.log(result2);

document.getElementById("result1").innerHTML=`${result1}`;
document.getElementById("result2").innerHTML=`${result2}`;