export interface PaymentStrategy {
  pay(amount: number): void;
  refund(amount: number): void;
}
