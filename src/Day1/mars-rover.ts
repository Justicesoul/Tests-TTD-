type Direction = "N" | "S" | "E" | "W";

export class MarsRover {
  coordinates: number[] = [0, 0]
  direction: Direction
  constructor(direction: Direction) {
    this.direction = direction
  }
  moveLeft(): void {
    this.coordinates[0]--
  }
  moveRight(): void {
    this.coordinates[0]++
  }
  moveUp(): void {
    this.coordinates[1]++
  }
  moveDown(): void {
    this.coordinates[1]--
  }
  getCoordinates(): number[] {
    return this.coordinates
  }
}