import { Player } from './Player';
import { Deck } from './Deck';
import { Hand, THand } from './Hand';

export class Dealer {
    constructor(private deck: Deck) {}

    public deal(players: Player[]): void {
        for (let player of players) {
            this.dealToPlayer(player);
        }
    }

    public dealToPlayer(player: Player) {
        player.hand = new Hand(this.deck.take(2) as THand);
    }
}
