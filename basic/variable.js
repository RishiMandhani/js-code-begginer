const accountId=14453
let accountEmail="rm@gmail.com"
var accountPassword="12345"
accountCity="Kanpur"
let accountState;

// accountId=2//not allowed
accountEmail="hch@gmail.com"
accountPassword="5764"
accountCity="jaipur"
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity])
/*prefer not to use var
because of issue in block scope and functional scope*/
console.log(accountState);


