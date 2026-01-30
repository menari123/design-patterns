import { PaymentStrategy } from "./PaymentStrategy";

export class BitcoinPayment implements PaymentStrategy {
    constructor(private walletAddress: string) {}

    pay(amount: number): void {
        console.log(`\nPagamento com Bitcoin`);
        console.log(`   Endereço da Carteira: ${this.walletAddress}`);
        console.log(`   Valor: R$ ${amount.toFixed(2)}`);
    }

    refund(amount: number): void {
        console.log(`\nReembolso em Bitcoin`);
        console.log(`   Endereço da Carteira: ${this.walletAddress}`);
        console.log(`   Valor: R$ ${amount.toFixed(2)}`);
    }
}