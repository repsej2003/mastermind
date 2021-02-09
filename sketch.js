function setup() {
  createCanvas(screen.availWidth/3*2, screen.availHeight/3*2);
  print(screen.availWidth, screen.availHeight)
  Board = new Board();
  Board.printBoard();
  geuss = new Row()
  geuss.guess([1,2,3,4])
  Board.turn(geuss)
  Board.printBoard();
}

function draw() {
 
}



