class Board {

	//mode
	// player makes code and  pc geuss       |  PvsPC | 0
	// pc makes code and player geuss        |  PCvsP | 1
	// player makes code and player geuss    |  PvsP  | 2

	constructor(mode) {
		this.colorNum = colorNumber;
		this.board = new Array(100);
		this.mode = mode;

		if (this.mode == 1) {
			this.code = generatCode();
		}

		for (let i = 0; i < this.board.length; i++) {
			this.board[i] = new Row();
		}
		this.turnNumber = 0;

	}
	printBoard() {
		let i = 0;
		this.board.forEach(row => {
			if (typeof row.colors[0] !== 'undefined') {
				print(row.printStat() + "  " + i)
			}

			i++;
		});

		if (typeof this.code !== 'undefined') {
			//	print("Code: " + this.code)
		}
	}

	turn(guess) {

		if (this.mode == 0) {

		} else if (this.mode == 1) {
			this.board[this.turnNumber].guess(guess);
			this.board[this.turnNumber].check(this.code)
			this.turnNumber++;
		} else if (this.mode == 2) {

		}
	}

	computerGeuss() {
		if (this.turnNumber == 0) {
			this.board[this.turnNumber].guess(generatCode());
		} else {
			let list = Array();
			let temp = Array();
			for (let i = 0; i < this.colorNum; i++) {
				temp.push(i)
				//this.check(temp);
				for (let j = 0; j < this.colorNum; j++) {
					temp.push(j)
					//this.check(temp);
					for (let k = 0; k < this.colorNum; k++) {
						temp.push(k)
						//this.check(temp);
						for (let p = 0; p < this.colorNum; p++) {
							temp.push(p)
							if (this.check(temp)) {
								list.push([...temp])
							}
							temp.pop()
						}
						temp.pop()
					}
					temp.pop()
				}
				temp.pop()
			}
			//print("mulighed koder: " + list.length)
			this.board[this.turnNumber].guess(this.getbest(list, 1));
		}
		this.turnNumber++;
	}

	check(answer) {
		for (let i = 0; i < this.turnNumber; i++) {
			let comparesen = this.board[i].compare(answer);
			let target = this.board[i].corrections;

			// tjek om den ligner for meget
			//if (comparesenSum > targetSum) {
			//	return false
			//}
			// tjek at der nok der sidder korrekt 
			if (comparesen[0] !== target[0]) {
				return false
			}
			if (comparesen[1] !== target[1]) {
				return false
			}
		}
		return true;
	}

	getbest(list, mode) { // mode 1 random mode 2 advansed
		let best;
		if (mode == 1) {
			let ran = Math.floor(Math.random() * list.length)
			best = list[ran];
		} else if (mode == 2) {
			let rank = [];
			list.forEach(code => {
				let dec = [code[0]];
				for (let i = 1; i < 4; i++) {
					let newDec = true;
					for (let j = dec.length - 1; j >= 0; j--) {

						if (code[i] == dec[j]) {
							newDec = false;
						}
					}
					if (newDec) {
						dec.push(code[i])

					}
				}

				rank.push([code, dec.length]);
			});

			rank.sort((a, b) => b[1] - a[1])
			best = rank[0][0];
		}

		return best;
	}

	checkwin() {
		return this.board[this.turnNumber - 1].corrections[0] == 4
	}
}