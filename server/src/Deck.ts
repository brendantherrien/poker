import { Card, CardRanking, CardSuit } from './Card';
import { enumKeys } from './common/helpers/enumKeys';

export class Deck {
    public cards: Card[] = [];

    public constructor() {
        this.build();
    }

    public build(): void {
        for (const ranking of enumKeys(CardRanking)) {
            for (const suite of enumKeys(CardSuit)) {
                this.cards.push(
                    new Card(CardSuit[suite], CardRanking[ranking])
                );
            }
        }
    }

    public take(num: number): Card[] {
        if (this.cards.length < num)
            throw new Error('Not enough cards remaining');
        return this.cards.splice(0, num);
    }

    public takeOne(): Card {
        return this.take(1)[0];
    }

    public shuffle(): void {
        for (let i = this.cards.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }

    public toString(): void {
        for (let card of this.cards) {
            console.log(card.ranking, card.suite);
        }
    }
}
