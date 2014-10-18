var x = 0;
var y = 0;

for(x = 0; x < 1000; x++){
	if ((x % 3 == 0) || (x % 5 == 0)){
		y += x;
	}
}

console.log(y);