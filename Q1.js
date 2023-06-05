let a="dada"
const hello=()=>{
    let s=0;
    let e=a.length-1;
    while(s<e){
        if(a[s]!=a[e]){
            return false;
        }
        else{
            s++;
            e--;
        }
    }
    return true;
}

if(hello()){
    console.log("palindrome");
}
else{
    console.log("not palindrome");

}