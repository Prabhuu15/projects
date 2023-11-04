// print vowels using for loop
let a = "balajiprabhu";

for(i=0 ; i<a.length ; i++){
if (a[i]=="a"||a[i]=="e"||a[i]=="i"||a[i]=="o"||a[i]=="u"){
console.log(a[i]);
}
}
// print vowels using while loop
let a = "balajiprabhu";
let i=0
while(i<a.length){
if (a[i]=="a"||a[i]=="e"||a[i]=="i"||a[i]=="o"||a[i]=="u"){
console.log(a[i]);
}
i++;
}
//using string method
let str = "Hello World";
let res = str.match(/[aeiou]/ig)
console.log(res);
