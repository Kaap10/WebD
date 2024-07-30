class Account{
    _balance;

    constructor(initialBalance) {
        this._balance = initialBalance;
    }

    deposit(amount) {
        this._balance += amount;
        this.logbalance();
    }

    withdraw(amount) {
        if(amount <= this._balance) {
            this._balance -= amount;
            // this.logbalance();
        } else {
            console.log('Insufficient balance');
        }
        this.logbalance();
    }

    logbalance() {
        console.log(`Current balance: ${this._balance}`);
    }
}

const account1 = new Account(1000);
console.log(account1._balance);
account1.deposit(500);
account1.withdraw(200);