let time = 0;
let timerDiv = document.getElementById("demo");

let start = document.getElementById('start');
let pause = document.getElementById('pause');
let stop = document.getElementById('stopp');

let timerId;
pause.setAttribute('disabled',true)
stop.setAttribute('disabled',true)

let timerOn = false;

function setTime() {
    timerDiv.innerText = (parseInt(time/3600)<10?"0":"") + parseInt(time/3600)+":"+(parseInt((time/60)%60)<10?"0":"")+parseInt((time/60)%60)+":"+(parseInt((time)%60)<10?"0":"")+parseInt((time)%60)
}

function startfun() {
    if(!timerOn){
        timerOn='true';
        timerId = setInterval(() => {
            time = time + 0.1;
            setTime();
        }, 100);
    }
    
    start.setAttribute('disabled',true);
    pause.removeAttribute('disabled')
    stop.removeAttribute('disabled')
}

function pausefun() {
    if(timerOn){
        timerOn=false;
        clearInterval(timerId);
        pause.innerText='continue';
    }else{
        startfun();
        pause.innerText='pause';
    }
}

function stopfun(){
    timerOn = false;

    pause.setAttribute('disabled',true);
    stop.setAttribute('disabled',true);
    start.removeAttribute('disabled');
    pause.innerText='pause';

    clearInterval(timerId);
    time=0;
    timerDiv.innerText = "00:00:00";
}

stop.addEventListener('click',stopfun);
pause.addEventListener('click',pausefun);
start.addEventListener('click',startfun);