let rev=0;
const reverse=(n)=>{
while(n!=0){
    r=n%10;
    rev=(rev*10)+r;
    n=Math.floor(n/10);
}
console.log(rev)
}

reverse(743);