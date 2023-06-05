const arr2=[];

const hello=()=>{
    const arr=[1,2,3,-10,-18,-1];
for(i=0;i<6;i++){
    if(arr[i]<0){
        continue;
    }
    else{
        arr2.push(arr[i])
    }
}
console.log(arr2)

}
hello();