const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');
const btn = document.getElementById('btn');

var myVar,totalSeconds;

function startTimer(){
    totalSeconds = parseInt(second.value) + parseInt((minute.value * 60)) + parseInt((hour.value * 60 * 60));
    myVar = setInterval(()=>{
        totalSeconds = totalSeconds - 1;
        var val = totalSeconds;
        second.value = val % 60;
        val = parseInt(val / 60);
        minute.value = (val) % 60;
        val = parseInt(val / 60);
        hour.value = val;
        if(hour.value == 0 && minute.value == 0 &&second.value == 0){
            clearInterval(myVar);
        }
    },1000);
}

btn.addEventListener('click',startTimer)