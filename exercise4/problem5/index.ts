class BankAccount {
    private balance: number;
  
    constructor() {
      this.balance = 0;
    }
  
    public withdraw(amount: number): number {
      if (amount <= this.balance) {
        this.balance -= amount;
        return this.balance;
      } else {
        return -1;
      }
    }
  
    public deposit(amount: number): number {
      if (amount <= 1_000_000) {
        this.balance += amount;
        return this.balance;
      } else {
        return -1;
      }
    }
  }

export default BankAccount;
