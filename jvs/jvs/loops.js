// print all odd numbers from 1-20
var odd=20;
for(var i=1; i<=20; i++){
    if(i%2!==0)
    console.log(i);
}

// print the sequence 4,2,5,1,-0,5,-2,3,-5
var arr=[4,2,5,1,-0,5,-2,3,-5]
for(var i=0;i<arr.length;i++){
    console.log(arr[i])
}
// add 1-100 print5050
var sum=0
for(var i=1;i<=100;i++){
    sum+=i
}
console.log(sum)

// factorial 
var n=19;
var product=1;
for(var i=n;i>1;i--){
        if(product<1e8){
            product*=i
        }
}
console.log(product);