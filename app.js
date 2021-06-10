const total=document.getElementById("total");
const obtained=document.getElementById("obtained");
const h3=document.getElementById("h3");
const img=document.getElementById("image");
const btn=document.getElementById("btn");
let results;

img.style.visibility="hidden"

function show(){
    results=(obtained.value/total.value)*100;
    if (results>0 && results<=100)
    {
        if (results>=80)
        {
            h3.innerHTML="Excellent: "+results+"%";
            img.src="excellent.jpg";
            img.style.visibility="visible";
        }
        else if (results<80 && results>60)
        {
            h3.innerHTML="Good: "+results+"%";
            img.src="good.png";
            img.style.visibility="visible";
        }
        else if (results<60 && results>40)
        {
            h3.innerHTML="Try harder: "+results+"%";
            img.src="better luck.png";
            img.style.visibility="visible";
        }
        else if (results<40)
        {
            h3.innerHTML="You failed: "+results+"%";
            img.src="fail.jpg";
            img.style.visibility="visible";   
        }
    }
}