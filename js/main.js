/*jshint unused:false*/
/*jshint strict: false*/

/*
	TODO: 
        CHANGE THE BUTTON TO SAY WHAT TODO: 
            FOR EXAMPLE: WHEN THE SHOPS CLOSED MAKE THE BUTTON SAY "OPEN SHOP", WHEN ITS OPEN MAKE IT SAY "CLOSE SHOP"
        
        SORT SOME PERFORMANCE ISSUES WITH CRASHES

        COMEUP WITH NEW IDEAS ON WHAT TO ADD
        
        ADD THE NEW IDEAS
        
        CHANGE THE UI WITHOUT CHANGING THE GAME
            COLOUR THEME TO MAKE IT MORE PLEASING TO EYE INSTEAD ON WHITE ON BLACK
                {HURTS YOUR EYES FOR BRIGHT COLOURS LIKE NEON GREEN AND WHITE.}
       
        TWEAK THE MATHS ABIT

        MAKE THE MOBILE APP FOR IT {ANDROID FIRST THEN IOS}
*/

//Levels
var farmLevel = 1,
    autoFarmerLevel = 1,
    potatoPlantLevel = 1;

//Misc
var potatoes = 0,
    autoFarmer = 0,
    potatoPlant = 0;

//Settings
//var defaultInterval = 10000;
//var farmerInterval = 0;
var hours = 0,
    minutes = 0,
    seconds = 0;

//Prices
var defaultFarmerPrice = 17,
    defaultFarmerUpgradePrice = 25,
    defaultPlanterPrice = 200,
    defaultFarmLevelPrice = 15;

window.setInterval(timePlayed, 1000); //Time Played

function timePlayed() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes === 60) {
        minutes = 0;
        hours++;
    }
}

/*function toggleShop() {
	var x = document.getElementById('shop');
	if (x.style.display === "block") {
		x.style.display = "none";
	} else {
		x.style.display = "block";
	}
}*/

function addPotatoes() {
    var style = document.getElementById('potato').style;
    style.width = "350px";
    style.height = "250px";
    if (farmLevel <= 10) {
        potatoes++;
    }
    if (farmLevel >= 10) {
        potatoes++;
        potatoes++;
    }
    if (farmLevel >= 20) {
        potatoes++;
    }
    if (farmLevel >= 30) {
        potatoes++;
    }
    if (farmLevel >= 40) {
        potatoes++;
        potatoes++;
    }
    setTimeout(resetPotatoImg, 50);
}

function resetPotatoImg() {
    var style = document.getElementById('potato').style;
    style.width = "360px";
    style.height = "260px";
}

//function setFarmerInterval() {
//	farmerInterval = defaultInterval / autoFarmer;
//}

//	AUTO POTATOES
function autoPotatoPicker() {
    var x = 0.1 * autoFarmerLevel;
    var a = x * autoFarmer;
    var b = potatoes + a;
    potatoes = b;
}

function autoPotatoPlant() {
    var a = 300 * potatoPlant;
    var b = potatoes + a;
    potatoes = b;
}

window.setInterval(autoPotatoPicker, 1000); //Every 1 second
window.setInterval(autoPotatoPlant, 10000); //Every 10 seconds

/*   CHECKS IF YOU REACHED THE LEVEL TO UNLOCK SOMETHING  */
function checkReqLevel() {
    // Auto Farmer
    if (farmLevel < 3) {
        document.getElementById('buyAutoFarmer').style.display = "none";
    } else {
        document.getElementById('buyAutoFarmer').style.display = "inline-block";
    }
    //  Auto Farmer Upgrade
    if (farmLevel < 8) {
        document.getElementById('buyAutoFarmerUpgrade').style.display = "none";
    } else {
        document.getElementById('buyAutoFarmerUpgrade').style.display = "inline-block";
    }
    // Potato Plant
    if (farmLevel < 50) {
        document.getElementById('buyPotatoPlant').style.display = "none";
    } else {
        document.getElementById('buyPotatoPlant').style.display = "inline-block";
    }
    // Potato Plant Upgrade
    /*if (farmLevel < 53) {
        document.getElementById('buyPotatoPlantUpgrade').style.display = "none";
    } else {
        document.getElementById('buyPotatoPlantUpgrade').style.display = "inline-block";
    }*/
}

function checkPrices() {
    newAutoFarmerPrice = defaultFarmerPrice * autoFarmer + 8 * 3;
    if (autoFarmer === 0) { newAutoFarmerPrice = 12; }

    newAutoFarmerUpgradePrice = defaultFarmerUpgradePrice * autoFarmerLevel + 8 * 3;
    if (autoFarmerLevel === 1) { newAutoFarmerUpgradePrice = 25; }

    newFarmLevelPrice = defaultFarmLevelPrice * farmLevel + 8 * 3;
    if (farmLevel === 1) { newFarmLevelPrice = 12; }

    //  FARM LEVEL 
    if (potatoes >= newFarmLevelPrice) {
        document.getElementById('farmLevelPrice').style.color = "#36FF00";
    } else {
        document.getElementById('farmLevelPrice').style.color = "red";
    }
    // AUTO FARMER UPGRADE
    if (potatoes >= newAutoFarmerUpgradePrice) {
        document.getElementById('autoFarmerUpgradePrice').style.color = "#36FF00";
    } else {
        document.getElementById('autoFarmerUpgradePrice').style.color = "red";
    }
    //NEW AUTO FARMER
    if (potatoes >= newAutoFarmerPrice) {
        document.getElementById('autoFarmerPrice').style.color = "#36FF00";
    } else {
        document.getElementById('autoFarmerPrice').style.color = "red";
    }

    document.getElementById('farmLevelPrice').innerHTML = newFarmLevelPrice;
    document.getElementById('autoFarmerPrice').innerHTML = newAutoFarmerPrice;
    document.getElementById('autoFarmerUpgradePrice').innerHTML = newAutoFarmerUpgradePrice;
}

function upgradeFarm() {
    if (potatoes > newFarmLevelPrice) {
        farmLevel++;
        var x = potatoes - newFarmLevelPrice;
        potatoes = x;
    } else {
        alert("You do not have enough potatoes");
    }
}

function buyAutoFarmer() {
    if (potatoes > newAutoFarmerPrice) {
        autoFarmer++;
        x = potatoes - newAutoFarmerPrice;
        potatoes = x;
    } else {
        alert("You do not have enough potatoes");
    }
}

function buyAutoFarmerUpgrade() {
    if (potatoes > newAutoFarmerUpgradePrice) {
        autoFarmerLevel++;
        x = potatoes - newAutoFarmerUpgradePrice;
        potatoes = x;
    } else {
        alert("You do not have enough potatoes");
    }
}

/*	REFRESH ALL CONTENT ON THE PAGE	*/
setInterval(function() {
    //Levels
    document.getElementById('autoFarmerLevel').innerHTML = autoFarmerLevel;
    document.getElementById('farmLevel').innerHTML = farmLevel;
    document.getElementById('potatoPlantLevel').innerHTML = potatoPlantLevel;

    //Misc
    document.getElementById('autoFarmer').innerHTML = autoFarmer;
    document.getElementById('potatoes').innerHTML = potatoes.toFixed(1);
    document.getElementById('potatoPlant').innerHTML = potatoPlant;

    //timePlayed
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;

    checkReqLevel();
    checkPrices();
}, 100);