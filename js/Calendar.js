monthText = document.getElementById("monthText");
eventInfoContainer = document.getElementById("eventInfoContainer");
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
month = 10;

monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

events = [
{id:0, name:"CS:GO Tournament", owner:"janeDoe", description:"Come out to the 8th annual MLG CS:GO Tournament, sponsored by RedBull.", year:2020, month:11, day:11, time:"5pm", attending:true}
];

openEvent = -1;

eventInfoHTML = `<div class="row">
							<h1 id="eventTitle" class="text-center">Valorant Tournament</h1>
						</div>
						<div class="row">
						    <h5 class="eventInfo"><b>Date: </b><span id="eventDate">Tuesday October 13th, 2020</span></h5>
						</div>
						<div class="row">
						    <h5 class="eventInfo"><b>Time: </b><span id="eventTime">7-9pm</span></h5>
						</div>
						<div class="row">
							<h5 id="eventDescription" class="eventInfo"></h5>
						</div>
						<div class="row">
							<div class="col-md-12">
								<label class="custom-control-label moreSettingsLabel" for="casComp">Status</label>
								<div class="form-check casComp">
								  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
								  <label class="form-check-label goingRadio" for="exampleRadios1">
								    Going
								  </label>
								</div>
								<div class="form-check">
								  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
								  <label class="form-check-label goingRadio" for="exampleRadios2">
								    Not Going
								  </label>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-md-12">
								<h2 class="moreSettingsLabel">10 Going</h2>
								<div class="well" style="max-height: 300px;overflow: auto;">
									<ul class="list-group checked-list-box">
										<li class="list-group-item">
											<div class="custom-control custom-checkbox">
												<img class="profilePic" src="src/profilePic.png"/>
												<label class="custom-control-label" for="sg1">User1</label>
											</div>
										</li>
										<li class="list-group-item">
											<div class="custom-control custom-checkbox">
												<img class="profilePic" src="src/profilePic.png"/>
												<label class="custom-control-label" for="sg1">User2</label>
											</div>
										</li>
										<li class="list-group-item">
											<div class="custom-control custom-checkbox">
												<img class="profilePic" src="src/profilePic.png"/>
												<label class="custom-control-label" for="sg1">User3</label>
											</div>
										</li>
										<li class="list-group-item">
											<div class="custom-control custom-checkbox">
												<img class="profilePic" src="src/profilePic.png"/>
												<label class="custom-control-label" for="sg1">User4</label>
											</div>
										</li>
										<li class="list-group-item">
											<div class="custom-control custom-checkbox">
												<img class="profilePic" src="src/profilePic.png"/>
												<label class="custom-control-label" for="sg1">User5</label>
											</div>
										</li>
										<li class="list-group-item">
											<div class="custom-control custom-checkbox">
												<img class="profilePic" src="src/profilePic.png"/>
												<label class="custom-control-label" for="sg1">User6</label>
											</div>
										</li>
										<li class="list-group-item">
											<div class="custom-control custom-checkbox">
												<img class="profilePic" src="src/profilePic.png"/>
												<label class="custom-control-label" for="sg1">User7</label>
											</div>
										</li>
										<li class="list-group-item">
											<div class="custom-control custom-checkbox">
												<img class="profilePic" src="src/profilePic.png"/>
												<label class="custom-control-label" for="sg1">User8</label>
											</div>
										</li>
										<li class="list-group-item">
											<div class="custom-control custom-checkbox">
												<img class="profilePic" src="src/profilePic.png"/>
												<label class="custom-control-label" for="sg1">User9</label>
											</div>
										</li>
										<li class="list-group-item">
											<div class="custom-control custom-checkbox">
												<img class="profilePic" src="src/profilePic.png"/>
												<label class="custom-control-label" for="sg1">User10</label>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div class="row">
							<button type="button" class="btn btn-primary">Edit Event</button>
						</div>`;

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

function toggleEvent(id){
	//if this one is already open, close it
	if(openEvent == id){
		openEvent = -1;
	}
	else {
		openEvent = id;
	}
	updateEventInfo();
}

function addEvents(){
	var i;
	for(i=0; i < events.length; i++){
		e = events[i];
		if(e.year === year && e.month === month){
			if(e.attending){
				att = "attendingEvent";
			}else {
				att = "notAttendingEvent";
			}
			document.getElementById(`day${e.day}`).innerHTML = `${e.day}<p class="${att}" onClick="toggleEvent(${e.id})">${e.name}</p>`;
		}
	}
}

function updateEventInfo(){
	if(openEvent >= 0){
		e = events[openEvent];
		eventInfoContainer.innerHTML = eventInfoHTML;
		var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
		document.getElementById("eventTitle").textContent = e.name;
		document.getElementById("eventDate").textContent = new Date(e.year, e.month, e.day).toLocaleDateString("en-US", options);
		document.getElementById("eventTime").textContent = e.time;
		document.getElementById("eventDescription").textContent = e.description;
	}
	else {
		eventInfoContainer.innerHTML = ``;
	}
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
					content += `<div id="day${dayLabel}" class="col-md-1 weekendDay">${dayLabel}</div>`;
				}
				//weekday
				else {
					content += `<div id="day${dayLabel}" class="col-md-1 weekDay">${dayLabel}</div>`;
				}
			}
		}
		content += `<div class="col-md-2">
								</div>
							</div>`;
	}
	calendarGrid.innerHTML = content;
	addEvents();
	updateEventInfo();
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