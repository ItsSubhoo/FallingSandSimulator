function make2darr(cols, rows) {


    let arr = new Array(cols);
    for (let i = 0; i < arr.length; i++) {

        arr[i] = new Array(rows);
        for (let k = 0; k < arr[i].length; k++) {

            arr[i][k] = 0;
        }
    }
    return arr;
}

let grid;
let w = 10;
let h = 10;

function setup() {

    createCanvas(600, 600);
    colorMode(HSB, 360, 255, 255)

    cols = width / w;
    rows = height / h;

    grid = make2darr(cols, rows);
    for (let i = 0; i < cols; i++) {

        for (let j = 0; j < rows; j++) {
            grid[i][j] = 0;

        }
    }




}
function mouseDragged() {


    let col = floor(mouseX / w);
    let row = floor(mouseY / w);


    if (col >= 0 && row >= 0 && col <= cols - 1 && row <= rows - 1)
        grid[col][row] = 1;

}






























function draw() {

    background(0);

    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            noStroke();

            if (grid[i][j] == 1) {

                let colo = random(0, 360);

                fill(colo, 255, 255);
                // fill(grid[i][j] * 255);
                let x = i * w;
                let y = j * w;
                square(x, y, w);
                // console.log("done");
            }



        }
    }

    let nextgrid = make2darr(cols, rows);

    for (let i = 0; i < cols; i++) {

        for (let j = 0; j < rows; j++) {

            let currentstate = grid[i][j];

            if (currentstate == 1) {
                let direction = random([-1, 1]);
                let below = grid[i][j + 1];
                let left, right;
                if (i - direction >= 0 && i - direction <= rows - 1)
                    left = grid[i - direction][j + 1];
                if (i + direction >= 0 && i + direction <= rows - 1)
                    right = grid[i + direction][j + 1];


                if (below === 0) {
                    nextgrid[i][j + 1] = 1;


                } else if (left === 0) {

                    nextgrid[i - direction][j] = 1;
                } else if (right === 0) {

                    nextgrid[i + direction][j] = 1;
                } else {
                    nextgrid[i][j] = 1;
                }


            }

        }
    }
    grid = nextgrid;

}