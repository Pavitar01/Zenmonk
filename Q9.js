
let count =0;
const isprime=(a)=>{
    for(i=2;i<a;i++){
    
    if(a%i==0){
        count++;
    }
}

if(count){
console.log("not a prime");
}

else{
    console.log("prime");
}}
isprime(5)
    