var final_date = {
    time: "",
    date: ""
};

function bruh(){
    var time = document.querySelector('input[type="time"]');
    final_date.time = time.value;

}


function getDate(){
    var date = document.getElementById("date");
    console.log(date.value);
    final_date.date = date.value;
}

function nextPage(){
    document.getElementById("cont2").style.display = "flex";
    document.getElementById("cont1").style.display = "none";
    document.getElementById("next").innerHTML="submit";
    document.getElementById("next").onclick=notif;
    document.getElementById("Date_time").value = final_date.date + " " + final_date.time;
}

function notif(){
    alert("You're Event has been successfully Created")
}