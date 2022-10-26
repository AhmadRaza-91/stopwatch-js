var hr = 0;
var min = 0;
var sec = 0;
var count = 0;

var timer = false;

function start()
{
    timer = true;
    start="disabled";
    stopwatch();
}
function stop()
{
    timer = false;
}
function reset()
{
    timer = false;
    hr=0;
    min=0;
    sec=0;
    count=0;
    
    document.getElementById("hr").innerHTML = "0";
    document.getElementById("min").innerHTML = "0";
    document.getElementById("sec").innerHTML = "0";
    document.getElementById("count").innerHTML = "0";
}
function stopwatch()
{
    if (timer == true) {
        count = count+1;
        if (count == 100){
            sec = sec + 1;
            count = 0;
        }
    if (sec == 60){
        min = min +1;
        sec=0;
    }
    
    if (min == 60){
        hr = hr +1;
        min=0;
        sec=0;
    }   
    if (hr<10) {
        hrstring = "0" + hrstring;
    }
       
    if (min<10) {
        minstring = "0" + minstring;
    }
       
    if (sec<10) {
        secstring = "0" + secstring;
    }
       
    if (count<10) {
        countstring = "0" + countstring;
    }
        var hrstring = hr;
        var minstring = min;
        var secstring = sec;
        var countstring = count;


        document.getElementById("hr").innerHTML = hrstring;
        document.getElementById("min").innerHTML = minstring;
        document.getElementById("sec").innerHTML = secstring;
        document.getElementById("count").innerHTML = countstring;
        setTimeout( "stopwatch()",10);
    }
}