// @ts-nocheck
export class Game {
    public players: string[] = ['Leoni', 'Jessi', 'Alex'];
    public stack: string[] = [];
    public playedCards: string[] = [];
    public currentPlayer: number = 0;

    constructor() {
        for (let i = 1; i < 14; i++) {
            this.stack.push('ace_' + i);
            this.stack.push('hearts_' + i);
            this.stack.push('diamonds_' + i);
            this.stack.push('clubs_' + i);
        }
        shuffle(this.stack);
    }
}


function shuffle(array) {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    // Solange noch Elemente vorhanden sind
    while (0 !== currentIndex) {
        // Einen verbleibenden Index auswählen
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // Aktuelles Element mit dem zufälligen Element tauschen
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
}