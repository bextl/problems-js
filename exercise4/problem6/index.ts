// Update it as much as you want, just don't change the names

export class BankAccount {
  private balance: number;

  constructor() {
    this.balance = 0;
  }

  public withdraw(amount: number): number {
    if (amount <= this.balance) {
      this.balance =this.balance - amount;
      return this.balance;
    } else {
      return -1;
    }
  }
}


export class FedexAccount {
  public sendMail(recipient: string): void {
    console.log(`Sending mail to ${recipient} via Fedex.`);
  }

}

export class KazPostAccount {
  public sendMail(recipient: string): void {
    console.log(`Sending mail to ${recipient} via KazPost.`);
  }

}

export function withdrawMoney(accounts, amount) {
  for (const account of accounts) {
    account.withdraw(amount);
  }
}

export function sendLetterTo(accounts, recipient) {
  for (const account of accounts) {
    account.sendMail(recipient);
  }
}
