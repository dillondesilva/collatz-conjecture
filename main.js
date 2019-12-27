// n is the starting number of the collatz conjecture graph
var n = 1000;
var s = 0.9;
function setup() {
    createCanvas(1080, 1920);
    fill(0);
    stroke(0);
    background(255);
    frameRate(30);
    push();

    for (k=1; k<n; k++) {
        console.log(k);
        var x = k;
        var y = k;
        var old_x = k;
        while (x !== 1) {
            if (x%2 === 0) {
                y = x/2;
            } else {
                y = (3 * x) + 1;
            }
            line(old_x * s, x * s, x * s, y * s);
            old_x = x;
            x = y;
        } 
    }
}