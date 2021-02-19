// seks faver 0-7

let code;
let turncount = 0;
let colorNumber = 6;

function setup() {
	let count = 0
	let sum = 0
	let maks = 0;
	let min = 10000;

	board = new Board(0);

	code = generatCode();

	print("Code: " + code);

	for (let i = 0; i < 50; i++) {
		while (!turnhelper2()) {
		}
		print("won in " + turncount + " turns")
		board.printBoard();
		board = new Board(0);
		if (turncount > maks) {
			maks = turncount;
		}
		if (turncount < min) {
			min = turncount;
		}
		sum += turncount
		turncount = 0;
		code = generatCode();
		count++
		print("Code: " + code);
	}
	print("after " + count)
	print("max: " + maks + " avarge: " + (sum / count) + " min: " + min)

	//board.printBoard();
}

function turnhelper2() {
	board.computerGeuss()
	board.board[turncount].check(code);
	turncount++;

	return board.checkwin()
	//board.printBoard();
	//print("Code: " + code);
}

function turnhelper(turn) {
	board.turn(turn)
	board.printBoard();
}


function generatCode() {
	let code = new Array(4);
	for (let i = 0; i < code.length; i++) {
		code[i] = Math.floor(Math.random() * colorNumber);
	}


	return code;
}





