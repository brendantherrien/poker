import { Table } from './Table';
import { Hand } from './Hand';

export class Player {
    public hand?: Hand;
    public table?: Table;

    constructor(public name: string, public numChips: number = 0) {}

    public bet(amount: number): void {
        if (!this.table) throw new Error('Player not assigned to table.');

        // Check that bet is less than total amount player has
        if (amount > this.numChips)
            throw new Error(`Must bet less than or equal to total chips`);

        this.table.bet(amount);
    }

    public call(): void {
        if (!this.table) throw new Error('Player not assigned to table.');

        this.table.call();
    }

    public check(): void {
        if (!this.table) throw new Error('Player not assigned to table.');

        // confirm player has paid?

        this.table.check();
    }

    public toString(): string {
        return `
            Player: ${this.name}\n
            Chips: ${this.numChips}\n
            Current Hand: ${this.hand?.toString()}\n
        `;
    }
}
