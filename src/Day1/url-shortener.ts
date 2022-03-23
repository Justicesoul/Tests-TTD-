//url-shortener

interface UrlEntry {
  longUrl: string,
  shortUrl: string,
  visits: number,
}

export class UrlShortener {
  counter: number = 0;
  entries: UrlEntry[] = []

  shorten(longUrl: string): string {
    const shortUrl = "https://short.url/" + this.counter++;
    this.entries.push({ longUrl, shortUrl, visits: 0 })
    return shortUrl
  }

  translate(shortUrl: string): string | undefined {
    const entry = this.entries.find(e => e.shortUrl === shortUrl)
    if (!entry) {
      return
    } else {
      entry.visits++
      return entry.longUrl
    }
  }

  visits(shortUrl: string): number {
    const entry = this.entries.find(e => e.shortUrl === shortUrl)
    if (!entry) {
      return 0
    }
    return entry.visits

  }
}

