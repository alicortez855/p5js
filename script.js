function setup() //called once when programs starts
{
    createCanvas(400,400);
    translate (innerWidth/2)
    background(220);
}


function draw() //this runs in a loop to update the displayphp 
{
    point (150,250);
    line (0,400,400,0); /* x1 and y1 is the frst piont of line, x2 and ya is the end of piont */
    rect (100,100,100,100);
    rect (200,200,100,100);
    rect (300,300,100,100);


}

function drawAxes()
{
    stroke(0);
    strokeWeight (2);

    line (-width / 2, 0, width / 2,0)
    line (0, -height/2, 0, heigt/2)

    fill(0)
    noStroke();
    textSize(12);
    textAlighn(CENTER, CENTER);
    text("X", width /2 - 10, -10);
    text("Y", 10, -height /2 + 10);

}