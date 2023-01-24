import { Dealer } from './Dealer';
import { Player } from './Player';

export interface Pot {
    players: Player[];
    amount: number;
}

export class Table {
    public pots: Pot[] = [];
    public blind: number = 1;
    public players: Player[] = [];
    public btnIndex: number = 0;
    public currentPlayerIndex: number = 0;
    public currentBetAmount: number = 0;

    public constructor(private dealer: Dealer) {}

    public get currentBtn(): Player {
        return this.players[this.btnIndex];
    }

    public get currentPlayer(): Player {
        return this.players[this.currentPlayerIndex];
    }

    public get minimumBet(): number {
        return this.blind * 2;
    }

    public addPlayer(player: Player) {
        player.table = this;
        this.players.push(player);
    }

    public bet(amount: number): void {
        // Check that bet is minimum amount
        if (amount < this.minimumBet)
            throw new Error(
                `Must bet more than minimum bet: ${this.minimumBet}`
            );
    }

    public call(): void {}

    public check(): void {}

    public nextRound(): void {
        this.dealer.deal(this.players);

        for (let player of this.players) {
            console.log(player.toString());
        }
    }

    public start(): void {
        this.nextRound();
    }
}
