const hourHand = document.getElementById("hourHand");
const minHand = document.getElementById("minHand");
const secHand = document.getElementById("secHand");

setInterval(()=>{

    const date = new Date();
    var seconds = date.getSeconds();
    var minutes = date.getMinutes();
    var hours = date.getHours();
    if(hours>12){
        hours = hours - 12;
    }
    // console.log(hours)
    
    hourHand.style.transform = `rotate(${((hours/12)* 360) - 90}deg)`;
    secHand.style.transform = `rotate(${((seconds/60)*360) - 90}deg)`;
    minHand.style.transform = `rotate(${((minutes/60)*360) - 90}deg)`;
    


},1000);