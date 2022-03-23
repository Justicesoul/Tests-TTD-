import { Account } from "./account-statement";

//account-statement
describe("Account Statement", () => {
  it("should add deposit value", () => {
    const acc: any = new Account()
    acc.deposit(500)
    expect(acc.getDepo()).toEqual(500)
  });
  it('should be able to deposit & withdraw', () => {
    const acc: any = new Account()
    acc.deposit(500)
    acc.withdraw(300)
    expect(acc.getDepo()).toEqual(200)
  })
  it('should be able to print statements', () => {
    const acc: any = new Account()
    acc.deposit(500)
    expect(acc.getStatement()).toEqual("17.03.2022; 500; 500")
    acc.withdraw(300)
    expect(acc.getStatement()).toEqual("17.03.2022; -300; 200")
  })


});

