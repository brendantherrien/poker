export enum CardSuit {
    Clubs = 'Clubs',
    Diamonds = 'Diamonds',
    Hearts = 'Hearts',
    Spades = 'Spades',
}

export enum CardRanking {
    Two = 2,
    Three = 3,
    Four = 4,
    Five = 5,
    Six = 6,
    Seven = 7,
    Eight = 8,
    Nine = 9,
    Ten = 10,
    Jack = 11,
    Queen = 12,
    King = 13,
    Ace = 14,
}

export type CardRankingDisplayText = { [key in CardRanking]: string };

export const cardRankingDisplayText: CardRankingDisplayText = {
    [CardRanking.Two]: '2',
    [CardRanking.Three]: '3',
    [CardRanking.Four]: '4',
    [CardRanking.Five]: '5',
    [CardRanking.Six]: '6',
    [CardRanking.Seven]: '7',
    [CardRanking.Eight]: '8',
    [CardRanking.Nine]: '9',
    [CardRanking.Ten]: '10',
    [CardRanking.Jack]: 'J',
    [CardRanking.Queen]: 'Q',
    [CardRanking.King]: 'K',
    [CardRanking.Ace]: 'A',
};

export class Card {
    constructor(public suite: CardSuit, public ranking: CardRanking) {}

    public toString(): string {
        return `${
            cardRankingDisplayText[this.ranking]
        } of ${this.suite.toString()}`;
    }
}
