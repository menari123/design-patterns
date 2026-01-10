export interface PaymentStrategy {
  pay(amount: number): void;
  processRefund(amount: number): void;
}
