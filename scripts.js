
var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
let otp=document.querySelector(".otp")
otp.onclick=function(event){
    alert("Your otp is 123456")
}

let sub=document.querySelector(".submit")
let golu=document.querySelector(".golu").innerText=""
     let count=0;   
 sub.onclick=function(elem){
    
    let num=document.querySelector(".num").value
    if(num==123456){
        let golu=document.querySelector(".golu").innerText="Login sucessfully"
        
    }else{
        count++;
        let golu=document.querySelector(".golu").innerText=count+" "+"Enter valid OTP"
        
    }
}


let displayCard=document.querySelector("body").innerHTML
  
function logo(){
      document.querySelector("body").innerHTML=displayCard
    
    }
//let displayCard=[]
//let gg=document.querySelector(".body1").innerHTML;
//var na=document.querySelector("#nav").innerHTML;
 function search(){
    //console.log(gg)
    //console.log(na)
    //document.querySelector("body").innerHTML=na;
    document.querySelector("#banner").innerHTML=" ";
    document.querySelector("#Box-join").innerHTML=" ";
    document.querySelector("#Box-join").style.background = "white";
    document.querySelector("#Know_me").innerHTML = " ";
    
    document.querySelector("#bank-poster").innerHTML = " ";
    document.querySelector("#reff").innerHTML = " ";
    document.querySelector("#best").innerHTML = " ";
    document.querySelector("#bonless").innerHTML = " ";
    document.querySelector("#breakfast").innerHTML = " ";
    document.querySelector(".chek_out_blog").innerHTML = " ";
    document.querySelector("#body2").innerHTML = " ";
    document.querySelector(".banner2").innerHTML = " ";
    // document.querySelector(".news").innerHTML = " ";
   // document.querySelector(".down").innerHTML = " ";
   // document.querySelector(".last").innerHTML = " ";
}

function cato(){
        document.querySelector("#banner").innerHTML=" ";
        document.querySelector("#Box-join").innerHTML=" ";
        document.querySelector("#Box-join").style.background = "white";
        document.querySelector("#Know_me").innerHTML = " ";
        document.querySelector("#bank-poster").innerHTML = " ";
        document.querySelector("#reff").innerHTML = " ";
        document.querySelector("#best").innerHTML = " ";
        document.querySelector("#bonless").innerHTML = " ";
        document.querySelector("#breakfast").innerHTML = " ";
        document.querySelector(".chek_out_blog").innerHTML = " ";
        document.querySelector(".banner2").innerHTML = " ";
        document.querySelector(".news").innerHTML = " ";
        document.querySelector("#body3").innerHTML = " ";
}




