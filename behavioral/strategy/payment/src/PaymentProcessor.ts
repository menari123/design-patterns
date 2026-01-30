import { PaymentStrategy } from './strategies';

export class PaymentProcessor {
  private paymentMethod: PaymentStrategy | null = null;
  private paymentHistory: Array<{ amount: number; date: Date; method: string }> = [];
  private refoundHistory: Array<{ amount: number; date: Date; method: string }> = [];

  setPaymentStrategy(strategy: PaymentStrategy): void {
    this.paymentMethod = strategy;
  }

  processPayment(amount: number): boolean {
    if (!this.paymentMethod) {
      console.error('Erro: Método de pagamento não definido!');
      return false;
    }

    if (amount <= 0) {
      console.error('Erro: Valor deve ser maior que zero!');
      return false;
    }

    try {
      this.paymentMethod.pay(amount);
      this.paymentHistory.push({
        amount,
        date: new Date(),
        method: this.paymentMethod.constructor.name,
      });
      return true;
    } catch (error) {
      console.error('Erro ao processar pagamento:', error);
      return false;
    }
  }

  processRefund(amount: number): boolean {
    if (!this.paymentMethod) {
      console.error('Erro: Método de pagamento não definido!');
      return false;
    }

    if (amount <= 0) {
      console.error('Erro: Valor deve ser maior que zero!');
      return false;
    }

    try {
      this.paymentMethod.refund(amount);
      this.refoundHistory.push({
        amount,
        date: new Date(),
        method: this.paymentMethod.constructor.name,
      });
      return true;
    } catch (error) {
      console.error('Erro ao processar reembolso:', error);
      return false;
    }
  }

  getPaymentHistory(): Array<{ amount: number; date: Date; method: string }> {
    return this.paymentHistory;
  }

  displayPaymentHistory(): void {
    console.log('\nHistórico de Pagamentos:');
    if (this.paymentHistory.length === 0) {
      console.log('   Nenhum pagamento registrado');
      return;
    }
    this.paymentHistory.forEach((payment, index) => {
      console.log(
        `   ${index + 1}. ${payment.method} - R$ ${payment.amount.toFixed(2)} - ${payment.date.toLocaleString('pt-BR')}`
      );
    });
  }

  displayRefoundHistory(): void {
    console.log('\nHistórico de Reembolsos:');
    if (this.refoundHistory.length === 0) {
      console.log('   Nenhum reembolso registrado');
      return;
    }
    this.refoundHistory.forEach((refound, index) => {
      console.log(
        `   ${index + 1}. ${refound.method} - R$ ${refound.amount.toFixed(2)} - ${refound.date.toLocaleString('pt-BR')}`
      );
    });
  }
}
