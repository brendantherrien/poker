import { Card } from './Card';

export type THand = [Card, Card];

export class Hand {
    constructor(public hand: THand) {}

    public toString(): string {
        return `${this.hand[0].toString()}, ${this.hand[1].toString()}`;
    }
}
