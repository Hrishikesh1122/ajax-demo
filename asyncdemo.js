function showTime(){
    const date = new Date();
    return "Hours: "+date.getHours()+" Mins: "+date.getMinutes()+" Sec: "+date.getSeconds();
}

function showSessionExpire(){
    console.log("Activity-B : Your session expired at "+showTime());
}

console.log("Activity-A : Triggring Actitvity B at "+showTime());
setTimeout(showSessionExpire,5000);
console.log("Activity-A : Triggered activity B at "+showTime()+" Will execute after 5 seconds");