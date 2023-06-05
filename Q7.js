
let arr=[];
let fib=(n)=>{
if(n<=0){
    return 0;
}
if(n===1){
    return 1
}
else{
    const b=fib(n-1)+fib(n-2);
    return b;
}
}
for(let i=0;i<=10;i++){
    console.log(fib(i));
}
