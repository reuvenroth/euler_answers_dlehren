var i = 1;
var f = 0;
var a =0;
console.log(f);
console.log(i);
while(i< 4000000){
    
    i=i+f;
    f=i-f;
    
    console.log(i);
    if (i % 2 === 0){
        a++;  
    }
}
console.log(a);