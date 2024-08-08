// Declarations: Two Methods
// 1st method: Using Object constructor. By this method singleton object being created


// 2nd method: objects literals

const jersyNumber = Symbol("98") //will be used to create symbol inside object

const playerInfo = {
    playerName: "Babbar Azam",
    [jersyNumber]: 56, //data type: symbol
    "teamName": "Pakistan", //this represent 'key' always treated as string, so no harm done if you explicitly declare it
    "team role": "batsman", //if key is declared as explicit string and contain space between words, it cannot be then, accessed by .(dot) operatoe
    odiAvg: 59.87,
    t20iAvg: 47.25,
    testAvg: 53
}

//how to access object's data
// console.log(playerInfo.odiAvg);
// console.log(playerInfo["teamName"]);
// console.log(playerInfo.teamName);
// console.log(playerInfo.team role); //syntax error
// console.log(playerInfo["team role"]); //Expected: batsman

// console.log(playerInfo.jersyNumber); //Expected: undefined (so this method to access 'symbol' datatype is not valid)
//valid method
// console.log(playerInfo[jersyNumber]); //Expected: 56

//changing values of objects
playerInfo.t20iAvg = 44.4
// console.log(playerInfo.t20iAvg);

//freeze objects to avoid changing object's data
// Object.freeze(playerInfo) //Remember: once an object has been frozen, there is no way to unfreeze it.
//now try to change data
playerInfo.odiAvg = 99
// console.log(playerInfo.odiAvg); //Expected: 59.87 (same as old)

//check if object is frozen or not
// console.log(Object.isFrozen()) //Expected: true
