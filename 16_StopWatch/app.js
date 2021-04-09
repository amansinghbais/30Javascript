const startbtn = document.getElementById('start');
const resetbtn = document.getElementById('reset');
const pausebtn = document.getElementById('pause');
const display = document.getElementById('display');

var hour=0,second=0,minute=0,myVar;

function displayTime(){
    display.innerHTML = `${hour}:${minute}:${second}`;
}

startbtn.addEventListener('click',()=>{
    startbtn.disabled = true;
    resetbtn.disabled = false;
    pausebtn.disabled = false;
    myVar = setInterval(()=>{
        second = second + 1;
        if(second > 59){
            second = 0;
            minute = minute + 1;
        }
        if(minute > 59){
            minute = 0;
            hour = hour + 1;
        }
        displayTime();
    },1000);
});

pausebtn.addEventListener('click',()=>{
    startbtn.disabled = false;
    pausebtn.disabled = true;
    clearInterval(myVar);
})

resetbtn.addEventListener('click',()=>{
    startbtn.disabled = false;
    resetbtn.disabled = true;
    pausebtn.disabled = true;
    clearInterval(myVar);
    hour = 0,second = 0,minute = 0;
    displayTime();
})
