import { UrlShortener, Account } from "./index";

//url-shortener
describe("URL Shortener", () => {
  it("should return short url", () => {
    const urlShortener = new UrlShortener()
    const longUrl = "https://www.codelex.io/kontakti";
    const shortUrl = urlShortener.shorten(longUrl);

    expect(shortUrl.startsWith("https://short.url/")).toBeTruthy()
  });

  it("should translate short url to long url", () => {
    const urlShortener = new UrlShortener()
    const longUrl = "https://www.codelex.io/kontakti";
    const shortUrl = urlShortener.shorten(longUrl);

    const translatedLongUrl = urlShortener.translate(shortUrl)

    expect(translatedLongUrl).toEqual(longUrl)
  });

  it("should be able to handle multiple urls", () => {
    const urlShortener = new UrlShortener()
    const longUrl = "https://www.codelex.io/kontakti";
    const shortUrl = urlShortener.shorten(longUrl);

    const longUrl2 = "https://www.codelex.io/ievadnodarbibas";
    const shortUrl2 = urlShortener.shorten(longUrl2);

    const translatedLongUrl = urlShortener.translate(shortUrl)

    expect(urlShortener.translate(shortUrl)).toEqual(longUrl)
    expect(urlShortener.translate(shortUrl2)).toEqual(longUrl2)
  });
});

//account-statement
describe("Account Statement", () => {
  //   it("should add deposit value", () => {
  //     const acc: any = new Account()
  //     acc.deposit(500)
  //     expect(acc.getDepo()).toEqual(500)
  // });
  it('should be able to deposit & withdraw', () => {
    const acc: any = new Account()
    acc.deposit(500)
    acc.withdraw(300)
    expect(acc.getDepo()).toEqual(200)
  })
  it('should be able to print statements', () => {
    const acc: any = new Account()
    acc.deposit(500)
    acc.withdraw(300)
    expect(acc.getDepo()).toEqual(200)
  })


});

