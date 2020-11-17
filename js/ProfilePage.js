var num_games = 0;

function change(){
    var x = document.getElementById("checkbox1").checked;
    if(x){
        document.getElementById("seen").innerHTML ="Last seen: 11/17/2020";
    }
    else
    {
         document.getElementById("seen").innerHTML = "Last seen: Unavailable";
     }
}

function change2(){
    var x = document.getElementById("checkbox2").checked;
    if(x){
        document.getElementById("event").innerHTML ="Last event: dota 2 tournament";
    }
    else
    {
         document.getElementById("event").innerHTML = "Last event: Unavailable";
     }
}

function hide(){
    document.getElementById("contY").style.display = "none";
    document.getElementById("status").style.display = "none";
    document.getElementById("like_games").style.display = "block";
}

function returnprofile(){
    document.getElementById("contY").style.display = "";
    document.getElementById("status").style.display = "";
    document.getElementById("like_games").style.display = "none";
}

function changeboi(){
    var checkamong = document.getElementById("check_among").checked;
    var checkcs = document.getElementById("check_csgo").checked;
    var checkdota = document.getElementById("check_dota").checked;
    var checklol = document.getElementById("check_lol").checked;
    var checkmine = document.getElementById("check_mine").checked;
    var checkvalo  = document.getElementById("check_valo").checked;
    var count = 6;
    

    if(!checkamong){
        count--;
    }
    if(checkcs == false){
        count--; 
    }
    if(checkdota == false){
        count--; 
    }
    if(checklol == false){
        count--; 
    }
    if(checkmine == false){
        count--; 
    }
    if(checkvalo == false){
        count--; 
    }
    
document.getElementById("game_genre").innerHTML = `${count} Liked Games`
if(count == 1){
    document.getElementById("game_genre").innerHTML = `1 Liked Game`
}
}

function upload(){
    var x = document.getElementById("newpp").files[0] ;
    console.log(x);
    document.getElementById("profile_pic").src = URL.createObjectURL(x);
}