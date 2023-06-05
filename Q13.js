let arr=''

const fun=(a)=>{
// console.log("hello")
for(let i=a.length-1;i>=0;i--){
arr+=a[i];
}
console.log(arr);
}

fun("hello");