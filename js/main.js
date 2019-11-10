let path1, path2
let d, d2
let outline
let parser

let flowerPoints



function preload() {
    //flower = loadImage("assets/flower_2.svg");
}

function setup() {
    let canvas = createCanvas(windowWidth-19, windowHeight);
    canvas.parent("my-sketch")
    //background(0)

    path1 = document.getElementById("path");
    path2 = document.getElementById("path2");
    d = path1.getAttribute("d");
    //d2 = path2.getAttribute("d")
    console.log(d);
    outline = new PathConverter.Outline();
    parser = new PathConverter.SVGParser(outline);
    parser.parse(d);
    flowerPoints = outline.getShapes()[0].points;
    console.log(flowerPoints[0].main.x);

    //const vertices = [`<path d="${d}"/>`];

    //path2.setAttribute("d", outline.toSVG());
    console.log(flowerPoints);
    background(0, 255, 0)
}



function draw() {
    background(255);
    //image(flower, 0, 0, width)

    //strokeWeight(4)
    //stroke(255,0,0)
    scale(3)
    translate(15, -100)
    for (let j = 0; j < 7; j++) {

        let delayX = map(mouseX, 0, width, 0, 1)
        let delayY = map(mouseY, 0, width, 0, .5)

        translate(j * delayX - j * 1, j * delayY - j * 1)

        beginShape();
        for (let i = 0; i < flowerPoints.length; i++) {
            if (i == 0) {
                vertex(flowerPoints[0].main.x, flowerPoints[0].main.y)

            } else {
                let previousPt = createVector(flowerPoints[i - 1].main.x, flowerPoints[i - 1].main.y) //il primo punto può anche non avere una curva di bezier, giusto?

                let pt = createVector(flowerPoints[i].main.x, flowerPoints[i].main.y)
                let left, right
                if (flowerPoints[i].left != null) {
                    left = createVector(flowerPoints[i].left.x, flowerPoints[i].left.y) //se left non è null, allora assegna il valore del punto
                } else {
                    left = createVector(pt.x, pt.y) //se left è null, allora assegna il valore di pt. (senza curva di bezier)
                }
                if (flowerPoints[i].right != null) {
                    right = createVector(flowerPoints[i].right.x, flowerPoints[i].right.y)
                } else {
                    right = createVector(pt.x, pt.y)
                }

                //noFill()
                //strokeWeight(5)
                //point(pt.x, pt.y)

                noFill()
                let r = 60 
                let g = 160 + j * 10
                let b = 210 + j * 5
                let a = 255 - 40 * j
                let c = color(r,g,b,a)
                stroke(c)
                strokeWeight(.15)

                //vertex(previousPt.x, previousPt.y);
                bezierVertex(left.x, left.y, right.x, right.y, pt.x, pt.y);
            }
        }
        endShape(CLOSE);
    }
}