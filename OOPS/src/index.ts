console.clear();

class Account {
  nickname?: string;

  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number
  ) {}

  deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error("Invalid amount");
    }
    this._balance += amount;
  }
  get balance(): number {
    return this._balance;
  }
  // set balance(amount: number) {
  //   if (amount < 0) {
  //     throw new Error("Invalid value");
  //   }
  //   this._balance += amount;
  // }
}

let account = new Account(5757531972, "Bandi Uday Teja", 5000);

// console.log(account);

// console.log(account instanceof Account);

console.log(account.balance);

