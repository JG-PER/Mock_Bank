//This script was written by James Gengerke

//Is called when submitting login credentials, sets the localstorage keys
function submitHandler() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var userExists = document.getElementById('userExists').checked;
    localStorage.setItem("storeUsername", username);
    localStorage.setItem("storePassword", password);
    localStorage.setItem("storeExists", userExists);    
    acctNumberGen();
    verify();
}
//Clears all localstorage keys when called
function logout() {
    var username = null;
    var password = null;
    var userExists = null;
    var totalFunds = 0; 
    var genAcctNum = null;
    localStorage.setItem("storeUsername", username);
    localStorage.setItem("storePassword", password);
    localStorage.setItem("storeExists", userExists);
    localStorage.setItem("totalFunds", totalFunds);
    localStorage.setItem("acctNum", genAcctNum);
}

//Checks transfer options and then adds money if criteria is met
function mainTransfer() {
    if (document.getElementById("from").value === 'none') {
        alert("Please select your transfer locations.");
    } else if (document.getElementById("to").value === 'none') {
        alert("Please select your transfer locations.");
    } else {
        addFunds();
    }
}
//Adds money to account
function addFunds() {
        var totalFunds = parseFloat(localStorage.getItem('totalFunds'));
        var transferInput = parseFloat(prompt("How much money would you like to transfer?", 100));
        if (!isNaN(transferInput)) {
            var newFunds = parseFloat(totalFunds+transferInput);
            localStorage.setItem("totalFunds", newFunds.toFixed(2));
        } else {
            alert("This is not a number; canceled");
        }
    }

//If you dont agree or logout reset all and prevent access to index. 
if (localStorage.getItem('storeExists') === 'false') {
    window.location.href = "login.html";
    logout();
} else {
    void 0; 
}

if (localStorage.getItem('storeUsername') === "") {
    window.location.href = "login.html";
    logout();
} else {
    void 0; 
}

//Account Number Generation and relevant functions
function UL(){//Upper Letters
	var UL = ["A","B","C","D","E","F","G","H","I","J","K","L","M"];
	var nextUL = Math.floor(Math.random()*UL.length);
	return UL[nextUL];
}
function NG(){//Number Generator
    var genNum = Math.floor(Math.random()*100000000);
    return genNum;
}
function acctNumberGen() {
    var genAcctNum = UL() + NG();
    localStorage.setItem("acctNum", genAcctNum);
}

//Take the amount of money in the account and invest a random 
//amount below 50% of it, this money will all be lost cynically. 
function invest() {
    var symbolArray = ["BTC", "AAPL", "BKKT", "NVDA", "SOFI", "PG", "CVX", "MCD", "PFE", "SBUX"];
    var randomPercent = Math.random() * 0.5;
    var totalFunds = localStorage.getItem('totalFunds');
    var usableFunds = parseFloat(totalFunds*randomPercent);

     do {
        var ranSymbolIndex = Math.floor(Math.random() * symbolArray.length);
        var lostMoney = Math.floor(Math.random() * usableFunds);
        subtractFunds(lostMoney);
        //leftFunds=(usableFunds-=lostMoney);

        var span = document.createElement("span");
        span.className = 'createdSpan';
        span.innerHTML = "Your money was invested in " + symbolArray[ranSymbolIndex] + " and lost $ " + lostMoney + "<br>";
        document.getElementById("investedMoney").appendChild(span);
    } while (usableFunds < 0)
}

function subtractFunds(fundsLost) {
    var totalFunds = parseFloat(localStorage.getItem('totalFunds'));
    var newFunds = parseFloat(totalFunds-fundsLost);
    localStorage.setItem("totalFunds", newFunds.toFixed(2));
}



