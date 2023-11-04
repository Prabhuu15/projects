// split without split
var a = "this_is_me";
var b = [];
for (i=0 ; i<a.length ; i++){
if (a[i] !== "_"){
b.push(a[i])
}
}
console.log(b);

// push without push
a = [1,2,3]
a[a.length]=4
console.log(a)

//