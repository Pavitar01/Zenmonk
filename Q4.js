const hello=(a)=>{
    console.log("hello");
fib(a)
console.log()}
hello(10);

function fib(a){
    if(a==0){
        return 1;
    }
    if(a==1){
        return 1;
    }
    else{
        b= a+fib(a-1);
   
   console.log(b) }
}