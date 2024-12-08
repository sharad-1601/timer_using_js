const stop_timer = document.getElementById('stop_time');
const start_btn = document.getElementById('start');
const stop_btn = document.getElementById('stop');
const reset_btn = document.getElementById('reset');
const curr_time = document.getElementById('current_time');

let time;


do {
    time = Number(prompt("Enter time in seconds (non-negative number):", "00"));
} while (isNaN(time) || time < 0);

if (stop_timer) {
    stop_timer.innerText = time;
}

let currentTime = 0;  
let interval;


function showCurrentTime() {
    if (currentTime < time) {
        currentTime++;
        curr_time.innerText = currentTime;
    } 
    else if(currentTime == time){
        clearInterval(interval);
        alert("Timer completed")
    }else {
        clearInterval(interval);  
    }
}


start_btn.addEventListener('click', () => {
    if (!interval) { 
        interval = setInterval(showCurrentTime, 1000);
    }
});


stop_btn.addEventListener('click', () => {
    clearInterval(interval);
    interval = null; 
});


reset_btn.addEventListener('click', () => {
    clearInterval(interval);
    interval = null; 
    currentTime = 0; 
    curr_time.innerText = currentTime;  
});
