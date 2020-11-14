moreSettingsBtn = document.getElementById("moreSettingsBtn");
moreSettingsContent = document.getElementById("moreSettingsContent");
moreSettingsOpen = false;
moreSettingsHTML = `<div class="row">
							<div class="col-md-4">
							    <label class="moreSettingsLabel" for="schoolTb">School</label>
								</br>
							    <input type="text" class="form-control" placeholder="Enter school">
							</div>
						</div>
						<div class="row">
							<div class="col-md-4">
							    <label class="moreSettingsLabel" for="schoolTb">Program</label>
							    </br>
							    <input type="text" class="form-control" placeholder="Enter program">
							</div>
						</div>
						<div class="row">
							<div class="col-md-4">
							    <label class="moreSettingsLabel" for="quantity">Age</label>
								</br>
								<p>
								<input type="number" id="quantity" min="18" max="150">
								to
								<input type="number" id="quantity" min="18" max="150">
								</p>
							</div>
						</div>

						<div class="row">
							<div class="col-md-4">
								<label class="moreSettingsLabel" for="loc">Location</label>
								</br>
								<div class="well" id="loc" style="max-height: 300px;overflow: auto;">
									<ul class="list-group checked-list-box">
										<li class="list-group-item">
											<div class="custom-control custom-checkbox">
												<input type="checkbox" class="custom-control-input" id="loc1">
												<label class="custom-control-label" for="loc1">Near Me</label>
											</div>
										</li>
										<li class="list-group-item">
											<div class="custom-control custom-checkbox">
												<input type="checkbox" class="custom-control-input" id="loc2">
												<label class="custom-control-label" for="loc2">U.S. East</label>
											</div>
										</li>
										<li class="list-group-item">
											<div class="custom-control custom-checkbox">
												<input type="checkbox" class="custom-control-input" id="loc2">
												<label class="custom-control-label" for="loc2">U.S. Central</label>
											</div>
										</li>
										<li class="list-group-item">
											<div class="custom-control custom-checkbox">
												<input type="checkbox" class="custom-control-input" id="loc2">
												<label class="custom-control-label" for="loc2">U.S. West</label>
											</div>
										</li>
										<li class="list-group-item">
											<div class="custom-control custom-checkbox">
												<input type="checkbox" class="custom-control-input" id="loc2">
												<label class="custom-control-label" for="loc2">South America</label>
											</div>
										</li>
										<li class="list-group-item">
											<div class="custom-control custom-checkbox">
												<input type="checkbox" class="custom-control-input" id="loc2">
												<label class="custom-control-label" for="loc2">Europe</label>
											</div>
										</li>
										<li class="list-group-item">
											<div class="custom-control custom-checkbox">
												<input type="checkbox" class="custom-control-input" id="loc2">
												<label class="custom-control-label" for="loc2">Asia</label>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>`;

addGamesTabContent = `<div class="row">
							<div class="col-md-12">
								<ul id="gameTabList" class="nav nav-tabs addGames">
									
								</ul>
								<div class="row">
									<div class="col-md-12">
										<h3 id="selectedGameTitle">Valorant</h3>
									</div>
								</div>
								<div class="row">
									<div class="col-md-6">
										<h3>Ranks</h3>
										<div class="row">
											<div class="flex-container">
												<div class="dropdown">
												    <button type="button" id="minRank" data-toggle="dropdown">
												     <img id="minRankIcon" src="src/gold1.png" class="rankImg">
												    </button>
												    <ul id="minRankDropdownList" class="dropdown-menu" role="menu" aria-labelledby="minRank">
												    </ul>
												</div>

												<div id="ranksTo">
													<h4>to</h4>
												</div>

												<div class="dropdown">
												    <button type="button" id="maxRank" data-toggle="dropdown">
												     <img id="maxRankIcon" src="src/plat3.png" class="rankImg">
												    </button>
												    <ul id="maxRankDropdownList" class="dropdown-menu" role="menu" aria-labelledby="maxRank">
												    </ul>
												</div>
											</div>
										</div>
									</div>
									<div class="col-md-6">
										<label class="custom-control-label moreSettingsLabel" for="casComp">Mode of Play</label>
										<div class="form-check casComp">
										  <input class="form-check-input" onClick="onCasualClick()" type="radio" name="exampleRadios" id="casualRadio">
										  <label class="form-check-label casCompRadio" for="casualRadio">
										    Casual
										  </label>
										</div>
										<div class="form-check">
										  <input class="form-check-input" onClick="onCompClick()" type="radio" name="exampleRadios" id="compRadio">
										  <label class="form-check-label casCompRadio" for="compRadio">
										    Competitive
										  </label>
										</div>
									</div>
								</div>
								</br>
							</div>
						</hr>
						</div>`;

addGamesTabContentNoRank = `<div class="row">
							<div class="col-md-12">
								<ul id="gameTabList" class="nav nav-tabs addGames">
									
								</ul>
								<div class="row">
									<div class="col-md-12">
										<h3 id="selectedGameTitle">Valorant</h3>
									</div>
								</div>
								<div class="row">
									<div class="col-md-6">
										<h3>Ranks</h3>
										<div class="row">
											<div class="flex-container">
												<div id="ranksTo">
													<h4>This game has no ranking system</h4>
												</div>
											</div>
										</div>
									</div>
									<div class="col-md-6">
										<label class="custom-control-label moreSettingsLabel" for="casComp">Mode of Play</label>
										<div class="form-check casComp">
										  <input class="form-check-input" onClick="onCasualClick()" type="radio" name="exampleRadios" id="casualRadio">
										  <label class="form-check-label casCompRadio" for="casualRadio">
										    Casual
										  </label>
										</div>
										<div class="form-check">
										  <input class="form-check-input" onClick="onCompClick()" type="radio" name="exampleRadios" id="compRadio">
										  <label class="form-check-label casCompRadio" for="compRadio">
										    Competitive
										  </label>
										</div>
									</div>
								</div>
								</br>
							</div>
						</hr>
						</div>`;

gameIndex = {
	"Counter Strike: Global Offensive":0,
	"League of Legends":1,
	"Dota 2":2,
	"Valorant":3,
	"Among Us":4,
	"Minecraft":5,
	"Monopoly":6
};

gameFiles = [
	"csgo",
	"lol",
	"dota",
	"valorant",
	"amongus",
	"minecraft",
	"monopoly"
];

rankNames = [
	["Silver 1",
	"Silver 2",
	"Silver 3",
	"Silver 4",
	"Silver Elite",
	"Silver Elite Master",
	"Gold Nova 1",
	"Gold Nova 2",
	"Gold Nova 3",
	"Gold Nova Master",
	"Master Guardian 1",
	"Master Guardian 2",
	"Master Guardian Elite",
	"Distinguished Master Guardian",
	"Legendary Eagle",
	"Legendary Eagle Master",
	"Supreme Master First Class",
	"Global Elite"],
	[],
	[],
	["Iron 1",
	"Iron 2",
	"Iron 3",
	"Bronze 1",
	"Bronze 2",
	"Bronze 3",
	"Silver 1",
	"Silver 2",
	"Silver 3",
	"Gold 1",
	"Gold 2",
	"Gold 3",
	"Platinum 1",
	"Platinum 2",
	"Platinum 3",
	"Diamond 1",
	"Diamond 2",
	"Diamond 3",
	"Immortal 1",
	"Immortal 2",
	"Immortal 3",
	"Radiant"],
	[],
	[],
	[]
];


firstGame = false;
tabList = null;
tabString = "";
games = [];
nextTabId = 0;
activeTab = 0;


function toggleMoreSettings() {
	moreSettingsOpen = !moreSettingsOpen;
	if(moreSettingsOpen){
		moreSettingsBtn.textContent = "Less Settings";
		moreSettingsBtn.className = "btn btn-light myBtns"
		moreSettingsContent.innerHTML = moreSettingsHTML;
	}
	else {
		moreSettingsBtn.textContent = "More Settings";
		moreSettingsBtn.className = "btn btn-primary myBtns"
		moreSettingsContent.innerHTML = '';
	}
}

function addGame(gameName) {
	games.push({id:gameIndex[gameName], name:gameName, minRank:0, maxRank:rankNames[gameIndex[gameName]].length-1, isComp:false});
}

function onCasualClick() {
	games[activeTab].isComp = false;
	refreshActiveTabContents();
}

function onCompClick() {
	games[activeTab].isComp = true;
	refreshActiveTabContents();
}

function onTabClick(i) {
	activeTab = i;
	refreshActiveTabContents();
}

function setMinRank(i) {
	games[activeTab].minRank = i;
	document.getElementById("minRankIcon").src=`src/ranks/${gameFiles[games[activeTab].id]}/${games[activeTab].minRank}.png`;
}

function setMaxRank(i) {
	games[activeTab].maxRank = i;
	document.getElementById("maxRankIcon").src=`src/ranks/${gameFiles[games[activeTab].id]}/${games[activeTab].maxRank}.png`;
}

function refreshActiveTabContents() {
	document.getElementById("selectedGameTitle").innerText = games[activeTab].name;
	document.getElementById("casualRadio").checked = !games[activeTab].isComp;
	document.getElementById("compRadio").checked = games[activeTab].isComp;
	minRankList = document.getElementById("minRankDropdownList");
	maxRankList = document.getElementById("maxRankDropdownList");
	minRankList.innerHTML = ``;
	maxRankList.innerHTML = ``;
	var i;
	for(i=0; i < rankNames[games[activeTab].id].length; i++){
		minRankList.innerHTML += `<li onClick="setMinRank(${i})"><a href="#"><img class="${gameFiles[games[activeTab].id]}Icon" src="src/ranks/${gameFiles[games[activeTab].id]}/${i}.png" class="rankImg"/>${rankNames[games[activeTab].id][i]}</a></li>`;
		maxRankList.innerHTML += `<li onClick="setMaxRank(${i})"><a href="#"><img class="${gameFiles[games[activeTab].id]}Icon" src="src/ranks/${gameFiles[games[activeTab].id]}/${i}.png" class="rankImg"/>${rankNames[games[activeTab].id][i]}</a></li>`;
	}
	document.getElementById("minRankIcon").className = gameFiles[games[activeTab].id] + "Icon";
	document.getElementById("maxRankIcon").className = gameFiles[games[activeTab].id] + "Icon";
	setMinRank(games[activeTab].minRank);
	setMaxRank(games[activeTab].maxRank);
}

function addGames() {
	i = 0;
	n = document.getElementById("sg"+i)
	while(n) {
		//if the ith game in the list exists
		if(n){
			//and if it is checked
			if(n.checked){
				//add the game
				if(!firstGame){
					firstGame = true;
					document.getElementById("tabContainer").innerHTML = addGamesTabContent;
					gameName = document.getElementById("sglbl"+i).textContent;
					tabList = document.getElementById("gameTabList");
					tabString += `<li onClick="onTabClick(${nextTabId})"><a href="#"><img class="iconTab" id="tab0" src="src/${gameFiles[gameIndex[gameName]]}.png"/></a></li>`;
					addGame(gameName);
					nextTabId++;
				}
				else
				{
					gameName = document.getElementById("sglbl"+i).textContent;
					tabString += `<li onClick="onTabClick(${nextTabId})"><a href="#"><img class="iconTab" id='"tab${nextTabId}' src="src/${gameFiles[gameIndex[gameName]]}.png"/></a></li>`;
					addGame(gameName);
					nextTabId++;
				}
			}
		}
		//if there are no more games in the list, return
		else{
			break;
		}
		i += 1;
		n = document.getElementById("sg"+i);
	}
	if(firstGame) {
		tabList.innerHTML = tabString + `<li><a href="#exampleModal" data-toggle="modal" data-target="#exampleModal">+</a></li>`;
	}
	refreshActiveTabContents();
}