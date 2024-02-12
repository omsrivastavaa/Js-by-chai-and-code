const accountId = "112"
let accountEmail = "aks@aks.com"
var accountPassword = "220"
accountCity = "Bhopal"
let accountState;

// accountId = "113" = not allowed

accountEmail = "om@gmail.com"
accountPassword = "221"
accountCity = "Lucknow"

/*
prefer not to use var 
because of block scope and functional scope 
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);