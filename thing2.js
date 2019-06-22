var a = '42';
var b = 42;

function prnt(x) { /*a shorter way of writing console.log()*/
	console.log(x);
}
if(a==b){
	prnt("true");
}
else{
	prnt("not true");
}
if(a===b){
	prnt("also true");
}
else{
	prnt("also not true");
}