import { UrlShortener } from "./url-shortener";

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

    expect(urlShortener.translate(shortUrl)).toEqual(longUrl)
    expect(urlShortener.translate(shortUrl2)).toEqual(longUrl2)
  });

  it("should track number of times visited", () => {
    const urlShortener = new UrlShortener()
    const longUrl = "https://www.codelex.io/kontakti";
    const shortUrl = urlShortener.shorten(longUrl);

    expect(urlShortener.visits(shortUrl)).toBe(0)

    urlShortener.translate(shortUrl)

    expect(urlShortener.visits(shortUrl)).toBe(1)

    urlShortener.translate(shortUrl)
    urlShortener.translate(shortUrl)
    urlShortener.translate(shortUrl)

    expect(urlShortener.visits(shortUrl)).toBe(4)
  });
});

