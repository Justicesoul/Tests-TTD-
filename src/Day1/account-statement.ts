//account-statement
export class Account {
  depo: number = 0
  statement: string = ""
  deposit(amount: number): void {
    this.depo += amount
    this.statement = `17.03.2022; ${amount}; ${this.depo}`
  }
  withdraw(amount: number): void {
    this.depo -= amount
    this.statement = `17.03.2022; -${amount}; ${this.depo}`
  }
  getDepo() {
    return this.depo
  }
  getStatement() {
    return this.statement
  }
}

