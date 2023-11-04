
var a = [1, 0, 1, 0];
var b = [];
debugger
for (var i = 0; i < a.length; i++) {
    if (b.indexOf(a[i]) === -1) {
        b.push(a[i]);
    }
}
console.log(b);
