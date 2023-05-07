class BankAccount {
    id: number;
    name: string;
    protected _balance: number;
    constructor( id: number,name: string,balance: number){
        this.id = id;
        this.name = name;
        this._balance = balance;
    }
    // getBalance():number{
    //     // console.log(`my currennt balance is ${this._balance}`)
    //     return this._balance;
    // }
    // addDeposit(ammount:number){
    //     this._balance = this._balance+ ammount
    // }
    get balance():number {
        return this._balance
    }
    set deposit(amount:number){
        this._balance = this._balance + amount;
    }
}

class StudentAccount extends BankAccount {
    test(){
        this._balance;
    }
    // constructor(parameters) {
        
    // }
}

const myAccount = new BankAccount(444, 'Persian' , 20)
// myAccount.balance = 0;
// myAccount.getBalance()
// console.log(myAccount)
// console.log(myAccount.getBalance())
myAccount.deposit = 79;
console.log(myAccount.balance)