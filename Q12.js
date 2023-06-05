let string="helloo";
function reverse(){
s=0;
e=string.length-1;

while(s<e){

    temp=string[s];
    string[s]=string[e];
    string[e]=string[s];
    
console.log(string)
s++;
e--;
}
console.log(string)

}
reverse();