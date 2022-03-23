import { VendingMachine } from "./change-maker";

describe("Change Maker", () => {
  it("should revers denominations", () => {
    const coinDenominations = [1, 5, 10, 25]
    const machine = new VendingMachine(coinDenominations)

    expect(machine.coinDenominations()).toEqual([25, 10, 5, 1])
  });

  // it("should throw error if tender amount is less then purchase", () => {
  //   const coinDenominations = [1, 5, 10, 25]
  //   const machine = new VendingMachine(coinDenominations)
  //   const change = machine.calculateChange(1.25, 2)

  //   expect(change).toThrow("Not enough money")
  // });

  it("should calculate the change to be given out", () => {
    const coinDenominationsDolar = [1, 5, 10, 25]
    const coinDenominationsPound = [1, 2, 5, 10, 20, 50]
    const coinDenominationsKrone = [1, 5, 10, 20]
    const machineDolar = new VendingMachine(coinDenominationsDolar)
    const machineKrone = new VendingMachine(coinDenominationsKrone)
    const machinePound = new VendingMachine(coinDenominationsPound)
    const change = machineDolar.calculateChange(2, 1.25)

    expect(change).toEqual([25, 25, 25])

    const change2 = machineKrone.calculateChange(2, 1.06)

    expect(change2).toEqual([20, 20, 20, 20, 10, 1, 1, 1, 1])


    const change3 = machinePound.calculateChange(2, 1.44)

    expect(change3).toEqual([50, 5, 1])
  });
});