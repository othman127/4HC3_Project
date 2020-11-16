monthText = document.getElementById("monthText");
calendarGrid = document.getElementById("calendarGrid");
calendarHeaderHTML = `<div class="row weekdayHeaders">
						<div class="col-md-2">
						</div>
						<div class="col-md-1 dayHeader">
							Sun
						</div>
						<div class="col-md-1 dayHeader">
							Mon
						</div>
						<div class="col-md-1 dayHeader">
							Tues
						</div>
						<div class="col-md-1 dayHeader">
							Wed
						</div>
						<div class="col-md-1 dayHeader">
							Thur
						</div>
						<div class="col-md-1 dayHeader">
							Fri
						</div>
						<div class="col-md-1 dayHeader">
							Sat
						</div>
						<div class="col-md-2">
						</div>
					</div>`;
year = 2020;
month = 0;

monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

updateCalendar();

function monthLeft() {
	month--;
	if(month < 0){
		month = 11;
		year--;
	}
	updateCalendar();
}

function monthRight() {
	month++;
	if(month >= 12){
		month = 0;
		year++;
	}
	updateCalendar();
}

function updateCalendar(){
	monthText.textContent = monthNames[month] + " " + year;
	content = calendarHeaderHTML;
	tmpDate = new Date(year, month, 0);
	numDays = daysInMonth(year, month);
	startDate = new Date(year, month, 0).getDay();
	var i;
	var j;
	for(i = 0; i < 6; i++){
		if(i===0 && startDate === 6 || i*7+1-startDate-1 > numDays){
			continue;
		}
		content += `<div class="row week">
									<div class="col-md-2"></div>`;
		for(j = 1; j <= 7; j++){
			dayLabel = i*7+j-startDate-1;
			if(i===0 && j <= startDate+1 || dayLabel > numDays){
				//weekend
				if(j==1 || j==7){
					content += `<div class="col-md-1 weekendDay"></div>`;
				}
				//weekday
				else {
					content += `<div class="col-md-1 weekDay"></div>`;
				}
			}
			else {
				//weekend
				if(j==1 || j==7){
					content += `<div class="col-md-1 weekendDay">${dayLabel}</div>`;
				}
				//weekday
				else {
					content += `<div class="col-md-1 weekDay">${dayLabel}</div>`;
				}
			}
		}
		content += `<div class="col-md-2">
								</div>
							</div>`;
	}
	calendarGrid.innerHTML = content;
}

function daysInMonth(y, m){
    let d = new Date(y, m+1, 0);
    return d.getDate();
}

function loadCalendarDays() {
    document.getElementById("calendarDays").innerHTML = "";

    var tmpDate = new Date(year, month, 0);
    var num = daysInMonth(month, year);
    var dayofweek = tmpDate.getDay();  
       // create day prefixes
    for(var i = 0; i <= dayofweek; i++)
    {
        var d = document.createElement("div");
        d.classList.add("day");
        d.classList.add("blank");
        document.getElementById("calendarDays").appendChild(d);
    }
     // render the rest of the days
    for(var i = 0; i < num; i++)
    {
        var tmp = i + 1;
        var d = document.createElement("div");
        d.id = "calendarday_" + i;
        d.className = "day";
        d.innerHTML = tmp;
        document.getElementById("calendarDays").appendChild(d);
    }

    var clear = document.createElement("div");
    clear.className = "clear";
    document.getElementById("calendarDays").appendChild(clear);
}