// n is the starting number of the collatz conjecture graph
var n = 2000;
var s = 1;
function setup() {
    createCanvas(800, 800);
    noFill(0);
    stroke(0);
    background(255);
    frameRate(30);
    push();

    for (k=0; k<n; k++) {
        var collatzChain = getCollatzChain(k);
        curve.apply(null, collatzChain);
    }
} 

function getCollatzChain(n) {
    var chain = [n];
    var x = n;
    var y = n;
    while (x !== 1) {
        if (x%2 === 0) {
            y = x/2;
        } else {
            y = (3 * x) + 1;
        }
        chain.push(y);
        x = y;
    } 

    return chain;
}
