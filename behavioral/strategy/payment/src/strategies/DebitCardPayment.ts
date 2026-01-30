import { PaymentStrategy } from './PaymentStrategy';

export class DebitCardPayment implements PaymentStrategy {
  constructor(
    private cardNumber: string,
    private accountHolder: string,
    private bankCode: string
  ) {}

  pay(amount: number): void {
    console.log(`\nPagamento com Cartão de Débito`);
    console.log(`   Número: ${this.cardNumber}`);
    console.log(`   Titular: ${this.accountHolder}`);
    console.log(`   Banco: ${this.bankCode}`);
    console.log(`   Valor: R$ ${amount.toFixed(2)}`);
    console.log(`   Pagamento debitado instantaneamente!`);
  }

  refund(amount: number): void {
    console.log(`\nReembolso em Cartão de Débito`);
    console.log(`   Valor: R$ ${amount.toFixed(2)}`);
    console.log(`   Reembolso iniciado! Será creditado em 1-2 dias úteis`);
  }
}
