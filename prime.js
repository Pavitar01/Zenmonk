const prime=(n)=>{
    for(let i=2;i<=n;i++){
       let isPrime=true;
        for(let j=2;i<i;j++){

            if(i%j===0){
                isPrime=false;
                break;
            }
          
        }
        if(isPrime){
            console.log(i)
        }
    }

}
prime(100)