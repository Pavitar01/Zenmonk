const hello=()=>{
    const arr=[1,2,3,10,18,-1];
    let greater=arr[0];
    for(i=0;i<6;i++){
        if(arr[i]>greater){
            greater=arr[i];
        }
    }
    console.log(greater);
    
}
hello();