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

    for (k=n-1; k<n; k++) {
        console.log(k);
        var x = k;
        var y = getFirstCoord(k);
        var old_y = k;
        while (x !== 1) {
            if (x%2 === 0) {
                y = x/2;
            } else {
                y = (3 * x) + 1;
            }
            line(x * s, y * s, y * s, y * s);
            // ellipse(k,y, 1)
            x = y;
        } 
    }
}

function getCollatzChain(n) {
    var chain = [];

    while (x !== 1) {
        if (x%2 === 0) {
            y = x/2;
        } else {
            y = (3 * x) + 1;
        }
        chain.push(y);
        x = y;
    } 

}
