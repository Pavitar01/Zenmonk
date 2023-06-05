
const arr=[];
const fib=(n)=>{
if(n<1){
    return 0;
}
if(n==1){
    return 1
}
else{
    const b=fib(n-1)+fib(n-2);
    return b;
}
}
console.log(
fib(10)
);