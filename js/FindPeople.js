moreSettingsBtn = document.getElementById("moreSettingsBtn");
moreSettingsContent = document.getElementById("moreSettingsContent");
searchResultsContent = document.getElementById("searchResultsContent");
alertContent = document.getElementById("alertContent");
moreSettingsOpen = false;
moreSettingsHTML = `<div class="row">
							<div class="col-md-4">
							    <label class="moreSettingsLabel" for="school">School</label>
								</br>
						    	<select id="school" class="autocorrectTextBox stringTextBox" name="school">
						    	  <option>-</option>
								  <option>McMaster</option>
								  <option>Guelph</option>
								  <option>Waterloo</option>
								</select>
							    </input>
							</div>
						</div>
						<div class="row">
							<div class="col-md-4">
							    <label class="moreSettingsLabel" for="schoolTb">Program</label>
							    </br>
							    <select id="program" class="autocorrectTextBox stringTextBox" name="program">
							      <option>-</option>
							      <option>Commerce</option>
								  <option>Software Engineering</option>
								  <option>Social Sciences</option>
								</select>
							</div>
						</div>
						<div class="row">
							<div class="col-md-4">
							    <label class="moreSettingsLabel" for="quantity">Age</label>
								</br>
								<p id="quantity">
								<select id="minAge" class="autocorrectTextBox intTextBox" name="minAge">
								  <option>-</option>
								  <option>13</option>
								  <option>14</option>
								  <option>15</option>
								  <option>16</option>
								  <option>17</option>
								  <option>18</option>
								  <option>19</option>
								  <option>20</option>
								  <option>21</option>
								  <option>22</option>
								  <option>23</option>
								  <option>24</option>
								  <option>25</option>
								  <option>26</option>
								  <option>27</option>
								  <option>28</option>
								  <option>29</option>
								  <option>30</option>
								  <option>31</option>
								  <option>32</option>
								  <option>33</option>
								  <option>34</option>
								  <option>35</option>
								  <option>36</option>
								  <option>37</option>
								  <option>38</option>
								  <option>39</option>
								  <option>40</option>
								  <option>41</option>
								  <option>42</option>
								  <option>43</option>
								  <option>44</option>
								  <option>45</option>
								  <option>46</option>
								  <option>47</option>
								  <option>48</option>
								  <option>49</option>
								  <option>50</option>
								  <option>51</option>
								  <option>52</option>
								  <option>53</option>
								  <option>54</option>
								  <option>55</option>
								  <option>56</option>
								  <option>57</option>
								  <option>58</option>
								  <option>59</option>
								  <option>60</option>
								  <option>61</option>
								  <option>62</option>
								  <option>63</option>
								  <option>64</option>
								  <option>65</option>
								  <option>66</option>
								  <option>67</option>
								  <option>68</option>
								  <option>69</option>
								  <option>70</option>
								  <option>71</option>
								  <option>72</option>
								  <option>73</option>
								  <option>74</option>
								  <option>75</option>
								  <option>76</option>
								  <option>77</option>
								  <option>78</option>
								  <option>79</option>
								  <option>80</option>
								  <option>81</option>
								  <option>82</option>
								  <option>83</option>
								  <option>84</option>
								  <option>85</option>
								  <option>86</option>
								  <option>87</option>
								  <option>88</option>
								  <option>89</option>
								  <option>90</option>
								  <option>91</option>
								  <option>92</option>
								  <option>93</option>
								  <option>94</option>
								  <option>95</option>
								  <option>96</option>
								  <option>97</option>
								  <option>98</option>
								  <option>99</option>
								  <option>100</option>
								  <option>101</option>
								  <option>102</option>
								  <option>103</option>
								  <option>104</option>
								  <option>105</option>
								  <option>106</option>
								  <option>107</option>
								  <option>108</option>
								  <option>109</option>
								  <option>10</option>
								  <option>111</option>
								  <option>112</option>
								  <option>113</option>
								  <option>114</option>
								  <option>115</option>
								  <option>116</option>
								  <option>117</option>
								  <option>118</option>
								  <option>119</option>
								  <option>120</option>
								</select>
								to
								<select id="maxAge" class="autocorrectTextBox intTextBox" name="maxAge">
								  <option>-</option>
								  <option>13</option>
								  <option>14</option>
								  <option>15</option>
								  <option>16</option>
								  <option>17</option>
								  <option>18</option>
								  <option>19</option>
								  <option>20</option>
								  <option>21</option>
								  <option>22</option>
								  <option>23</option>
								  <option>24</option>
								  <option>25</option>
								  <option>26</option>
								  <option>27</option>
								  <option>28</option>
								  <option>29</option>
								  <option>30</option>
								  <option>31</option>
								  <option>32</option>
								  <option>33</option>
								  <option>34</option>
								  <option>35</option>
								  <option>36</option>
								  <option>37</option>
								  <option>38</option>
								  <option>39</option>
								  <option>40</option>
								  <option>41</option>
								  <option>42</option>
								  <option>43</option>
								  <option>44</option>
								  <option>45</option>
								  <option>46</option>
								  <option>47</option>
								  <option>48</option>
								  <option>49</option>
								  <option>50</option>
								  <option>51</option>
								  <option>52</option>
								  <option>53</option>
								  <option>54</option>
								  <option>55</option>
								  <option>56</option>
								  <option>57</option>
								  <option>58</option>
								  <option>59</option>
								  <option>60</option>
								  <option>61</option>
								  <option>62</option>
								  <option>63</option>
								  <option>64</option>
								  <option>65</option>
								  <option>66</option>
								  <option>67</option>
								  <option>68</option>
								  <option>69</option>
								  <option>70</option>
								  <option>71</option>
								  <option>72</option>
								  <option>73</option>
								  <option>74</option>
								  <option>75</option>
								  <option>76</option>
								  <option>77</option>
								  <option>78</option>
								  <option>79</option>
								  <option>80</option>
								  <option>81</option>
								  <option>82</option>
								  <option>83</option>
								  <option>84</option>
								  <option>85</option>
								  <option>86</option>
								  <option>87</option>
								  <option>88</option>
								  <option>89</option>
								  <option>90</option>
								  <option>91</option>
								  <option>92</option>
								  <option>93</option>
								  <option>94</option>
								  <option>95</option>
								  <option>96</option>
								  <option>97</option>
								  <option>98</option>
								  <option>99</option>
								  <option>100</option>
								  <option>101</option>
								  <option>102</option>
								  <option>103</option>
								  <option>104</option>
								  <option>105</option>
								  <option>106</option>
								  <option>107</option>
								  <option>108</option>
								  <option>109</option>
								  <option>10</option>
								  <option>111</option>
								  <option>112</option>
								  <option>113</option>
								  <option>114</option>
								  <option>115</option>
								  <option>116</option>
								  <option>117</option>
								  <option>118</option>
								  <option>119</option>
								  <option>120</option>
								</select>
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
												     <img id="minRankIcon" class="rankImg">
												    </button>
												    <ul id="minRankDropdownList" class="dropdown-menu" role="menu" aria-labelledby="minRank">
												    </ul>
												</div>

												<div id="ranksTo">
													<h4>to</h4>
												</div>

												<div class="dropdown">
												    <button type="button" id="maxRank" data-toggle="dropdown">
												     <img id="maxRankIcon" class="rankImg">
												    </button>
												    <ul id="maxRankDropdownList" class="dropdown-menu" role="menu" aria-labelledby="maxRank">
												    </ul>
												</div>
											</div>
										</div>
									</div>
									<div class="col-md-6">
										<h3>Mode of Play</h3>
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

addGamesContentDefault = `<div class="row">
								<div class="col-md-12">
									<ul class="nav nav-tabs addGames">
										<li class="active"><a href="#">Add Games</a></li>
										<li><a href="#exampleModal" data-toggle="modal" data-target="#exampleModal">+</a></li>
									</ul>
									<div class="row">
										<div class="col-md-4">
											<h4>Click '+' to add games to search for</h4>
										</div>
										<div class="col-md-8">
										</div>
									</div>
									</br>
								</div>
								</hr>
							</div>`;

searchResultsHTML = `
<h3>Search Results</h3>
<table class="table table-light">
						  <thead>
						    <tr>
						      <th scope="col">Name</th>
						      <th scope="col">Age</th>
						      <th scope="col">School</th>
						      <th scope="col">Program</th>
						      <th scope="col">Location</th>
						      <th scope="col">Games</th>
						    </tr>
						  </thead>
						  <tbody id="searchResultsTableBody">
						    
						  </tbody>
						</table>`;

alertHTML = `<div class="alert alert-success" role="alert">
							<button type="button" onClick="hideAlert()" class="close" aria-label="Close">
						    	<span aria-hidden="true">&times;</span>
							</button>
							<strong>Friend request sent!</strong>
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

gameNames = [
	"Counter Strike: Global Offensive",
	"League of Legends",
	"Dota 2",
	"Valorant",
	"Among Us",
	"Minecraft",
	"Monopoly"
];

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
	["Beginner",
	"Intermediate",
	"Expert"],
	["Beginner",
	"Intermediate",
	"Expert"],
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
	["Beginner",
	"Intermediate",
	"Expert"],
	["Beginner",
	"Intermediate",
	"Expert"],
	["Beginner",
	"Intermediate",
	"Expert"]
];

users = [
{name:"JohnDoe99", age:20, school:"McMaster", program:"Software Engineering", location:"Hamilton, ON", games:[{id:0, rank:5, isComp:true}, {id:3, rank:1, isComp:false}]},
{name:"player1", age:22, school:"Guelph", program:"Software Engineering", location:"Hamilton, ON", games:[{id:5, rank:1, isComp:false}, {id:4, rank:1, isComp:false}]},
{name:"abc", age:19, school:"McMaster", program:"Commerce", location:"Toronto, ON", games:[{id:4, rank:0, isComp:false}, {id:2, rank:2, isComp:false}]}
];

firstGame = false;
tabList = null;
tabString = "";
games = [];
nextTabId = 0;
activeTab = -1;


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
	//start autocorrect
    $('.autocorrectTextBox').select2();
}

function addGame(gameId) {
	games.push({id:gameId, minRank:0, maxRank:(rankNames[gameId].length-1), isComp:false});
	activeTab = games.length - 1;
}

function showAlert() {
	alertContent.innerHTML = alertHTML;
}

function hideAlert() {
	alertContent.innerHTML = ``;
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

function deleteGameTab() {
	games.splice(activeTab, 1);
	if(games.length > 0){
		activeTab = Math.max(0, activeTab-1);
	}
	else {
		activeTab = -1;
	}
	setGameTabs();
	refreshActiveTabContents();
}

function setGameTabs(){
	var i;
	tabContainer = document.getElementById("tabContainer");
	if(games.length === 0){
		tabContainer.innerHTML = addGamesContentDefault;
		return;
	}
	else {
		tabContainer.innerHTML = addGamesTabContent;
	}
	tabList = document.getElementById("gameTabList");
	tabString = "";
	for(i=0; i < games.length; i++){
		gameId = games[i].id;
		tabString += `<li onClick="onTabClick(${i})"><a href="#"><img class="iconTab" id="tab0" src="src/${gameFiles[gameId]}.png"/></a></li>`;
		nextTabId++;
	}
	if(games.length > 0) {
		tabList.innerHTML = tabString + `<li><a href="#exampleModal" data-toggle="modal" data-target="#exampleModal">+</a></li>`;
	}
	refreshActiveTabContents();
}

function refreshActiveTabContents() {
	if(games.length > 0)
	{
		var i;
		document.getElementById("selectedGameTitle").innerHTML = `${gameNames[games[activeTab].id]}
			<button onClick="deleteGameTab()" class="btn btn-primary myBtns deleteGameButton">&times;</button>`;
		document.getElementById("casualRadio").checked = !games[activeTab].isComp;
		document.getElementById("compRadio").checked = games[activeTab].isComp;
		minRankList = document.getElementById("minRankDropdownList");
		maxRankList = document.getElementById("maxRankDropdownList");
		minRankList.innerHTML = ``;
		maxRankList.innerHTML = ``;
		for(i=0; i < rankNames[games[activeTab].id].length; i++){
			minRankList.innerHTML += `<li onClick="setMinRank(${i})"><a href="#"><img class="${gameFiles[games[activeTab].id]}Icon" src="src/ranks/${gameFiles[games[activeTab].id]}/${i}.png" class="rankImg"/>${rankNames[games[activeTab].id][i]}</a></li>`;
			maxRankList.innerHTML += `<li onClick="setMaxRank(${i})"><a href="#"><img class="${gameFiles[games[activeTab].id]}Icon" src="src/ranks/${gameFiles[games[activeTab].id]}/${i}.png" class="rankImg"/>${rankNames[games[activeTab].id][i]}</a></li>`;
		}
		document.getElementById("minRankIcon").className = gameFiles[games[activeTab].id] + "Icon";
		document.getElementById("maxRankIcon").className = gameFiles[games[activeTab].id] + "Icon";
		setMinRank(games[activeTab].minRank);
		setMaxRank(games[activeTab].maxRank);
	}
	else{
		document.getElementById("tabContainer").innerHTML = addGamesContentDefault;
	}
}

function openAddFriendModal(name){
	if(confirm(`Send friend request to ${name}?`)){
		showAlert();
	} else {
	}
}

//returns i where i is index of game with that id in games array
//-1 if not found
function searchingForGame(id){
	var i;
	for(i=0; i < games.length; i++){
		if(games[i].id === id){
			return i;
		}
	}
	return -1;
}

function sortScore(a){
	score = 0;
	schoolElement = document.getElementById("school");
	programElement = document.getElementById("program");
	minAgeElement = document.getElementById("minAge");
	maxAgeElement = document.getElementById("maxAge");

	if(schoolElement && programElement && minAgeElement && maxAgeElement) {
		school = schoolElement.options[schoolElement.selectedIndex].text;
		program = programElement.options[programElement.selectedIndex].text;
		minAge = minAgeElement.options[minAgeElement.selectedIndex].text;
		maxAge = maxAgeElement.options[maxAgeElement.selectedIndex].text;

		if(school === a.school){
			score += 5;
		}
		if(program === a.program){
			score += 5;
		}
		if(a.age >= minAge && a.age <= maxAge){
			score += 5;
		}
	}
	var i;
	for(i=0; i < a.games.length; i++){
		gameIndex = searchingForGame(a.games[i].id);
		//if this is a game we are searching for
		if(gameIndex >= 0){
			game = games[gameIndex];
			score += 10;
			//if the user is within the rank range
			if(a.games[i].rank >= game.minRank && a.games[i].rank <= game.maxRank){
				score += 10;
			}
			//if the user has the correct mode of play
			if(a.games[i].isComp === game.isComp){
				score += 5;
			}
		}
	}
	return score;
}

function filterResults(a) {
	var i;
	for(i=0; i < a.games.length; i++){
		gameIndex = searchingForGame(a.games[i].id);
		//if this is a game we are searching for
		if(gameIndex >= 0){
			return true;
		}
	}
	return false;
}

function findGamers() {
	searchResultsContent.innerHTML = searchResultsHTML;
	tableBody = document.getElementById("searchResultsTableBody");
	contentString = ``;
	gamesString = ``;
	results = [...users];
	results.sort(function(x, y) {
		return sortScore(y) - sortScore(x);
	});
	results = results.filter(filterResults);
	var i;
	var j;
	for(i = 0; i < results.length; i++){
		gamesString = ``;
		for(j = 0; j < results[i].games.length; j++){
			gamesString += `<div class="searchResultsGame">`
			gamesString += `<img id="minRankIcon" src="src/${gameFiles[results[i].games[j].id]}.png" class="rankImg">`;
			gamesString += `<img id="minRankIcon" src="src/ranks/${gameFiles[results[i].games[j].id]}/${results[i].games[j].rank}.png" class="rankImg">`;
			if(results[i].games[j].isComp){
				gamesString += `Comp.`;
			} else {
				gamesString += `Casual`;
			}
			gamesString += `</div>`;
		}
		contentString +=  `<tr onClick="openAddFriendModal('${results[i].name}')">
						      <td>${results[i].name}</td>
						      <td>${results[i].age}</td>
						      <td>${results[i].school}</td>
						      <td>${results[i].program}</td>
						      <td>${results[i].location}</td>
						      <td>${gamesString}</td>
						    </tr>`;
	}
	tableBody.innerHTML = contentString;
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
				gameId = i;
				addGame(gameId);
			}
		}
		//if there are no more games in the list, return
		else{
			break;
		}
		i += 1;
		n = document.getElementById("sg"+i);
	}
	setGameTabs();
	refreshActiveTabContents();
}