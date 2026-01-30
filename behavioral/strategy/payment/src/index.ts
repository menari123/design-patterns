import { PaymentProcessor } from './PaymentProcessor';
import { CashPayment, CreditCardPayment, DebitCardPayment, PixPayment, BitcoinPayment } from './strategies';

console.log('═══════════════════════════════════════════════════════════');
console.log('  STRATEGY PATTERN - Sistema de Pagamentos');
console.log('═══════════════════════════════════════════════════════════');

const processor = new PaymentProcessor();

// Exemplo 1: Pagamento com Cartão de Crédito
console.log('\nExemplo 1: Pagamento com Cartão de Crédito');
processor.setPaymentStrategy(
  new CreditCardPayment('4111 1111 1111 1111', 'José Vinicius Menari', '12/25', '123')
);
processor.processPayment(150.5);
processor.processRefund(50);

// Exemplo 2: Pagamento com Cartão de Débito
console.log('\n\nExemplo 2: Pagamento com Cartão de Débito');
processor.setPaymentStrategy(new DebitCardPayment('5555 5555 5555 5555', 'José Vinicius Menari', '001'));
processor.processPayment(200);
processor.processRefund(100);

// Exemplo 3: Pagamento via Pix
console.log('\n\nExemplo 3: Pagamento via Pix');
processor.setPaymentStrategy(new PixPayment('viniciusmenari@gmail.com'));
processor.processPayment(99.99);
processor.processRefund(99.99);

// Exemplo 4: Pagamento com dinheiro
console.log('\n\nExemplo 4: Pagamento com Dinheiro');
processor.setPaymentStrategy(new CashPayment());
processor.processPayment(75);
processor.processRefund(25);

//Exemplo 5: Pagamento com Bitcoin
console.log('\n\nExemplo 5: Pagamento com Bitcoin');
processor.setPaymentStrategy(new BitcoinPayment('1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa'));
processor.processPayment(0.05);
processor.processRefund(0.02);

// Histórico
processor.displayPaymentHistory();
processor.displayRefoundHistory();

console.log('\n═══════════════════════════════════════════════════════════\n');
