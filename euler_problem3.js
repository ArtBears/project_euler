var x = 2;
var y = 600851475143
var z = 0;

while(true){
	z = y/x;
	if (y % x == 0){
		y = z;
		x = 2;
	}
	else if(x == y){
		console.log(x);
		break;
	}
	else{
		x +=1;
	}
}