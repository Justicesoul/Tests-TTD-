import { MarsRover } from "./mars-rover";

describe("Account Statement", () => {
  it("should be able to move right", () => {
    const rover = new MarsRover("E")
    rover.moveRight()
    expect(rover.getCoordinates()).toEqual([1, 0])
  });

  it("should be able to move left", () => {
    const rover = new MarsRover("W")
    rover.moveLeft()
    expect(rover.getCoordinates()).toEqual([-1, 0])
  });
  it("should be able to move up", () => {
    const rover = new MarsRover("N")
    rover.moveUp()
    expect(rover.getCoordinates()).toEqual([0, 1])
  });
  it("should be able to move left", () => {
    const rover = new MarsRover("S")
    rover.moveDown()
    expect(rover.getCoordinates()).toEqual([0, -1])
  });
});