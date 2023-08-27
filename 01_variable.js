const accountId = 1444553
let accountEmail = "sharadaade@yahoo.com"
var accountPassword = "12345"
acCity = "jaipur"
let accountState;

// accountId = 2 // not allowed to change

accountEmail = "ok@gmail.com"
accountPassword = "2124"
acCity = "Beed"
console.log(accountId);
/*
    Prefer  not to use var 
    because of issue in block scope and functional scope
*/
console.table([accountEmail,accountPassword,acCity,accountState])

