import { PaymentStrategy } from './PaymentStrategy';

export class PixPayment implements PaymentStrategy {
  constructor(private pixKey: string) {}

  pay(amount: number): void {
    console.log(`\nPagamento via Pix`);
    console.log(`   Chave Pix: ${this.pixKey}`);
    console.log(`   Valor: R$ ${amount.toFixed(2)}`);
    console.log(`   Transação realizada instantaneamente!`);
  }

  refund(amount: number): void {
    console.log(`\nDevolução via Pix`);
    console.log(`   Valor: R$ ${amount.toFixed(2)}`);
    console.log(`   Devolução realizada instantaneamente!`);
  }
}
