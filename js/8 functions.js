// odd or even using function
debugger
function num(a){
    if(a%2==0){
    console.log('it is a even number' + a);
    }
    else{
    console.log('it is a odd number' + a)
    }
    return a;
}

var a=prompt("enter a Number");
num(a);

// greater or lesseer using function
function num(a,b,c){
    if (a>b && a>c){
     console.log( a + "A is a greater number")}
     else if(b>a&&b>c) {
     console.log(b + "B is a greater number")}
     else{
     console.log(c+ "C is a greater number")}
     return num;
    }
    var a=prompt("enter a number")
    var b=prompt("enter a number")
    var c=prompt("enter a number")
    num(a,b,c) 

    // finding length of the string without using methods

    var inputString = "Hello World!";
    var a = 0;
    while (inputString[a] !== undefined) {
    a++;
    }
    console.log( a);
    for (var i = 0; i < a; i++) {
    console.log(inputString[i]);
    }

    let a = "this is me" ;
    for (let i=0; a[i]!=undefined; i++) {
    console.log(a[i]);
    }
    