const accountId = 144553
let accountEmail = "rachit.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed

accountEmail = "ttbttvvt"
accountPassword = "2121212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var 
because of issue in block and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])