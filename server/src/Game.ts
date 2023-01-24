import { Table } from './Table';
import { Dealer } from './Dealer';
import { Deck } from './Deck';
import { Player } from './Player';

export class Game {
    public deck!: Deck;
    public dealer!: Dealer;
    public table!: Table;

    public constructor() {
        this.init();
        this.start();
    }

    public init(): void {
        this.deck = new Deck();
        this.deck.shuffle();

        this.dealer = new Dealer(this.deck);
        this.table = new Table(this.dealer);

        for (let i = 0; i < 9; i++) {
            const player = new Player(i.toString(), 1000);
            this.table.addPlayer(player);
        }
    }

    public start(): void {
        this.table.start();
    }
}
