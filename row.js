class Row {
    // 6 farver 0-5
    // 0 emtpy 1 corect color 2 corect color and placerig
    constructor() {
        this.colors = new Array(4);
        this.corrections = [0, 0];
    }

    printStat() {
        return this.colors[0] + "|" + this.colors[1] + "|" + this.colors[2] + "|" + this.colors[3] + "---  " + this.corrections[0] + " Helt rigtige " + this.corrections[1] + " Rigtie farve men forket placering"
    }

    guess(guess) {
        for (let i = 0; i < guess.length; i++) {
            this.colors[i] = guess[i];
        }
    }

    compare(Code1) {
        let code = [...Code1];
        let corrections = [0, 0];
        let colorsarray = [...this.colors];
        for (let i = colorsarray.length - 1; i >= 0; i--) {
            if (colorsarray[i] == code[i]) {
                corrections[0] += 1;
                colorsarray.splice(i, 1);
                code.splice(i, 1);

            }
        }
        for (let i = colorsarray.length - 1; i >= 0; i--) {
            for (let j = code.length - 1; j >= 0; j--) {
                if (colorsarray[i] == code[j]) {
                    corrections[1] += 1;
                    colorsarray.splice(i, 1);
                    code.splice(j, 1);
                    break;
                }
            }
        }
        return corrections;
    }

    check(Code) {
        this.corrections = this.compare(Code);

    }
}