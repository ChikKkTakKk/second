var os = require("os");
var userName = os.userInfo().username;
function Person(name, sername){
	console.log(name + " " + sername + " " + age);
}
var user1 = "Петя"
Person.name = user1; 
console.log(userName);