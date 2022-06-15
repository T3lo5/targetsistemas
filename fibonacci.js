//is a fibonacci number

function Fibonacci() {
    var n = 9;
    var a = 0;
    var b = 1;
    var c = 0;
    while (c < n) {
        c = a + b;
        a = b;
        b = c;
    }
    if (c == n) {
        console.log("O número " + n + " é fibonacci");
    }
    else {
        console.log("O número " + n + " não é fibonacci");
    }
}
Fibonacci();

