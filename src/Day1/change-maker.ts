export class VendingMachine {
  denominations: number[]
  constructor(denominations: number[]) {
    this.denominations = denominations.reverse()
  }
  calculateChange(purchaseAmount: number, tenderAmount: number): number[] {
    if (tenderAmount > purchaseAmount) {
      throw new Error("Not enough money");
    }

    let change = (purchaseAmount - tenderAmount) * 100
    let result: number[] = []

    for (let i = 0; i < this.denominations.length; i++) {
      while (change >= this.denominations[i]) {
        for (let y = 0; y < Math.floor(change / this.denominations[i]); y++) {
          change -= this.denominations[i]
          result.push(this.denominations[i])
        }
      }
    }
    return result
  }
  coinDenominations(): number[] {
    return this.denominations
  }
}