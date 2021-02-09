let mines;
let nabor;
let button;
let rows = 10;
let cols = 10;
let gridsize = 50;
let play = true;
let win = false;
let antalmines= 10;

function setup() {
  createCanvas(cols * gridsize, rows * gridsize);
  background(153);
  mines = new tabelnew(rows, cols);
  nabor = new tabelnew(rows, cols);
  button = new tabelnew(rows, cols);
  mines.randomwithbom(antalmines);
  //  nabor = tabelnew.findnabours(mines);
  mines.print();
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      nabor.data[i][j] = tabelnew.findnabours(mines, i, j);
      button.data[i][j] = new onthetop(i, j);
      button.data[i][j].drawbutton(j * gridsize, i * gridsize, gridsize, gridsize, 0, 0, 255);
    }
  }
  nabor.print();

}
function draw() {
  background(153)

  if (play) {
    if (!win) {

      background(153)
      for (let j = 0; j < cols; j++) {
        for (let i = 0; i < rows; i++) {
          fill(0);
          textSize(24);
          if (mines.data[i][j] != 1) text(nabor.data[i][j], j * gridsize + 25, i * gridsize + 25);
          else text("X", j * gridsize + 25, i * gridsize + 25);
          if (button.data[i][j].tegn == true && !button.data[i][j].flag) {
            button.data[i][j].drawbutton(j * gridsize, i * gridsize, gridsize, gridsize, 0, 0, 255);
          } else if (button.data[i][j].tegn == true && button.data[i][j].flag) {
            button.data[i][j].drawbutton(j * gridsize, i * gridsize, gridsize, gridsize, 0, 255, 255);
          }
        }
      }


      for (let i = 0; i < cols; i++) {
        fill(255);
        line(i * gridsize, 0, i * gridsize, height);
        line(0, i * gridsize, width, i * gridsize);
      }
      checkwin();
    } else {
      text("win", width / 2, height / 2);
    }

  } else {


    text("GAMEOVER", width / 2, height / 2);
  }
}




function mouseReleased() {

  if (mouseButton === LEFT) {
    for (let j = 0; j < cols; j++) {
      for (let i = 0; i < rows; i++) {
        if (button.data[i][j].tegn == true) {
          if (button.data[i][j].check() && !button.data[i][j].flag) {
            if (mines.data[i][j] == 1) {
              play = false;
              return;
            }
            button.data[i][j].fjern();
          }
        }
      }
    }
  }
  if (mouseButton === RIGHT) {
    for (let j = 0; j < cols; j++) {
      for (let i = 0; i < rows; i++) {
        if (button.data[i][j].tegn == true) {
          let engang = true;
          if (button.data[i][j].check() && engang) {
            button.data[i][j].flag = !button.data[i][j].flag;
            engang = false;
          }
        }
      }
    }
  }
}

function checkwin() {
  let antal = 0;
  for (let j = 0; j < cols; j++) {
    for (let i = 0; i < rows; i++) {
      if (mines.data[i][j] == 1 && button.data[i][j].flag == true){
        antal++;
      }
    }
  }
  if (antal == antalmines){
    win = true;
  }
}



