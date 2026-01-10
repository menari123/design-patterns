import { PaymentStrategy } from './PaymentStrategy';

export class CreditCardPayment implements PaymentStrategy {
  constructor(
    private cardNumber: string,
    private cardholderName: string,
    private expiryDate: string,
    private cvv: string
  ) {}

  pay(amount: number): void {
    console.log(`\nPagamento com Cartão de Crédito`);
    console.log(`   Número: ${this.cardNumber}`);
    console.log(`   Titular: ${this.cardholderName}`);
    console.log(`   Valor: R$ ${amount.toFixed(2)}`);
    console.log(`   Pagamento processado com sucesso!`);
  }

  processRefund(amount: number): void {
    console.log(`\nReembolso no Cartão de Crédito`);
    console.log(`   Valor: R$ ${amount.toFixed(2)}`);
    console.log(`   Reembolso processado! Será creditado em 3-5 dias úteis`);
  }
}
