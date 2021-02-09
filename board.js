class Board {
  
  constructor() {
    this.board = new Array(10);


    for (let i = 0; i < this.board.length; i++) {
      this.board[i] = new Row();
    }
    this.turnNumber = 0;

  }
  printBoard() {
    let i = 0;
    this.board.forEach(row => {
      print(row.printStat() + "  " + i)
      i++;
    });
  }

  turn(guess) {
    this.board[this.turnNumber] = guess;
    this.turnNumber++;
    
  }
}