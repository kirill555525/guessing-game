class GuessingGame {
    constructor() {
        this.range = [];
    }

    setRange(min, max) {
        for (let i = min + 1; i < max; i++) {
            this.range.push(i);
        }

    }

    guess() {
        return this.range[Math.floor(this.range.length / 2)];
    }

    lower() {
        this.range = this.range.slice(0, Math.floor(this.range.length / 2));
    }

    greater() {
        this.range = this.range.slice(Math.floor(this.range.length / 2) + 1);
    }
}

module.exports = GuessingGame;
