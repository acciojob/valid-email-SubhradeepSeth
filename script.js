function validEmail(str) {
  //your JS code here.
	let n=str.length;
	if(n===0) return false;
	let j=0,k=0,c1=0,c2=0;
	for(let i=0;i<n;i++){
		if(str.charAt(i)==='@'){
			j=i;
			c1++;
	 } 
		if(str.charAt(i)==='.'){
			k=i;
			c2++;
		} 
	}
	if(j<k&&c1===1&&c2===1&&j!==0) return true;
	else return false;
	
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));