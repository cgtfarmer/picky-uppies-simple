class Randomizer {

  static resourceColors = [Colors.red, Colors.green, Colors.blue];

  static getRandomInt(start, end) {
    if (end < start) {
      throw new Error('Invalid range: end must not be less than start');
    }

    if (start == end) {
      return start;
    }

    return Math.floor(Math.random() * (end - start + 1)) + start;
  }

  static createRandomResource() {
    return new Resource(
      Randomizer.getRandomInt(0, Game.canvas.width),
      Randomizer.getRandomInt(0, Game.canvas.height),
      20,
      true,
      2,
      Randomizer.getRandomResourceColor(),
      Colors.black
    );
  }

  static getRandomResourceColor() {
    var randomIndex = Randomizer.getRandomInt(0, (Randomizer.resourceColors.length - 1));

    return Randomizer.resourceColors[randomIndex];
  }
}
