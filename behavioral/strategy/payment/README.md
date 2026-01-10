# Strategy Pattern - Sistema de Pagamentos

Implementação do padrão **Strategy** em TypeScript para um sistema de processamento de pagamentos flexível e extensível.

## O que é o padrão Strategy?

O padrão Strategy é um padrão de design comportamental que:
- Define uma família de algoritmos
- Encapsula cada um deles
- Torna-os intercambiáveis
- Permite que o algoritmo varie independentemente dos clientes que o utilizam

## Estrutura do Projeto

```
src/
├── strategies/
│   ├── PaymentStrategy.ts        # Interface de estratégia
│   ├── CreditCardPayment.ts      # Implementação: Cartão de Crédito
│   ├── DebitCardPayment.ts       # Implementação: Cartão de Débito
│   ├── CashPayment.ts            # Implementação: Dinheiro
│   ├── PixPayment.ts             # Implementação: Pix
│   └── index.ts
├── PaymentProcessor.ts           # Processador de pagamentos (Aplica as diferentes estratégias)
└── index.ts                      # Exemplo de uso
```

## Como usar

### Instalação de dependências

```bash
yarn install
```

### Executar exemplo com ts-node

```bash
yarn dev
```

### Build e executar

```bash
yarn build
yarn start
```

### Watch mode (desenvolvimento)

```bash
yarn watch
```

## 💡 Exemplo de Uso

```typescript
import { PaymentProcessor } from './PaymentProcessor';
import { CreditCardPayment } from './strategies';

const processor = new PaymentProcessor();

// Definir estratégia de pagamento
processor.setPaymentMethod(
  new CreditCardPayment('4111 1111 1111 1111', 'João Silva', '12/25', '123')
);

// Processar pagamento
processor.processPayment(150.50);

// Processar reembolso
processor.processRefund(50.00);

// Ver histórico
processor.displayPaymentHistory();
```

## 🔄 Fluxo de Funcionamento

1. **PaymentProcessor** (Contexto) recebe uma estratégia de pagamento
2. A estratégia é armazenada como uma interface `PaymentStrategy`
3. Quando `processPayment()` é chamado, o contexto usa a estratégia configurada
4. Diferentes estratégias podem ser trocadas em tempo de execução

## ✅ Benefícios do padrão Strategy

- ✓ **Flexibilidade**: Adicionar novos métodos de pagamento sem impactar as demais existentes
- ✓ **Encapsulamento**: Cada estratégia é independente
- ✓ **Reutilização**: Estratégias podem ser compartilhadas entre diferentes contextos
- ✓ **Testabilidade**: Fácil de testar cada estratégia isoladamente
- ✓ **Manutenibilidade**: Código organizado e fácil de entender
