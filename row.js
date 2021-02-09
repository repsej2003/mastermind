class Row {

    constructor() {
        this.colors = new Array(4);
        this.corrections = new Array(4);
    }

    printStat() {
        return this.colors[0] + "|" + this.colors[1] + "|" + this.colors[2] + "|" + this.colors[3] + "---" + this.corrections[0] + "|" + this.corrections[1] + "|" + this.corrections[2] + "|" + this.corrections[3]
    }

    guess(guess) {
        for (let i = 0; i <guess.length; i++) {
            this.colors[i] = guess[i];
        }
    }



}