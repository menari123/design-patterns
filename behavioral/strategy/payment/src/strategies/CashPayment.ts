import { PaymentStrategy } from "./PaymentStrategy";

export class CashPayment implements PaymentStrategy {
    constructor() {}

    pay(amount: number): void {
        console.log(`\nPagamento em Dinheiro`);
        console.log(`   Valor: R$ ${amount.toFixed(2)}`);
        console.log(`   Pagamento recebido em dinheiro!`);
    }

    refund(amount: number): void {
        console.log(`\nReembolso em Dinheiro`);
        console.log(`   Valor: R$ ${amount.toFixed(2)}`);
        console.log(`   Reembolso entregue em dinheiro!`);
    }
}