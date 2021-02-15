var timer;
var sec = document.getElementById('sec').value;

// interval
function mrInterval(){
    sec = document.getElementById('sec').value;
    timer = setInterval(() => {
     if(sec>0){
         newVal = sec-1;
     }
     sec=newVal;
     document.getElementById('tmr').innerHTML=sec;
     
     if(sec==0){
         clearInterval(timer)
     }

    }, 1000);
}

// start button function

function startTimer(){
    mrInterval();
    document.getElementById('start').disabled=true;
}

//  pause button function
function pauseTimer(){
    clearInterval(timer);
    document.getElementById('start').disabled=false;
}

  
