//url-shortener

interface UrlEntry {
  longUrl: string,
  shortUrl: string
}

export class UrlShortener {
  counter: number = 0;
  entries: UrlEntry[] = []

  shorten(longUrl: string): string {
    const shortUrl = "https://short.url/" + this.counter++;
    this.entries.push({ longUrl, shortUrl })
    return shortUrl
  }

  translate(shortUrl: string): string | undefined {
    const entry = this.entries.find(e => e.shortUrl === shortUrl)
    if (!entry) {
      return
    } else {
      return entry.longUrl
    }
  }
}

//account-statement
export class Account {
  depo: number = 0
  deposit(amount: number): void {
    this.depo += amount
  }
  withdraw(amount: number): void {
    this.depo -= amount
  }
  getDepo() {
    return this.depo
  }
}

