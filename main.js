// n is the starting number of the collatz conjecture graph
var n = 1000;
var s = 1;
function setup() {
    createCanvas(800, 800);
    fill(0);
    stroke(0);
    background(255);
    frameRate(30);
    push();

    for (k=1; k<n; k++) {
        console.log(k);
        var x = k;
        var steps = 0;
        while (x !== 1) {
            if (x%2 === 0) {
                x = x/2;
            } else {
                x = (3 * x) + 1;
            }
            steps++;
        } 

        ellipse(k * s, steps * s, 1)
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
