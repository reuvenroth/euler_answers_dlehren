var total = 0
for(i = 0; i<1000; i+=5){
     console.log(i);
     total += i;
     console.log(total);
}

for(i = 0; i<1000; i+=3){
    console.log(i);
    total += i;
    console.log(total);
}

console.log(total);