
/**
 * Represents a game with all needed arrays (all players, card stack, played cards and the current player)
 */
export class Game {
    public players: string[] = [];
    public playerImages: string[] = [];
    public stack: string[] = [];
    public playedCards: string[] = [];
    public currentPlayer: number = 0;
    public pickCardAnimation = false;
    public currentCard: string = '';


    /**
     * Constructs a new instance of the Game class.
     * Initializes the stack of cards and shuffles them.
     */
    constructor() {
        for (let i = 1; i < 14; i++) {
            this.stack.push('spade_' + i);
            this.stack.push('hearts_' + i);
            this.stack.push('diamonds_' + i);
            this.stack.push('clubs_' + i);
        }
        shuffle(this.stack);
    }

    public toJson() {
        return {
            players: this.players,
            playerImages: this.playerImages,
            stack: this.stack,
            playedCards: this.playedCards,
            currentPlayer: this.currentPlayer,
            pickCardAnimation: this.pickCardAnimation,
            currentCard: this.currentCard
        };
    }
}


/**
 * Shuffles the elements of an array in place.
 * @param {Array} array - The array to be shuffled.
 */
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