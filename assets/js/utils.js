class Utils {

  static findResourceIndexById(id) {
    for (var i = 0; i < Game.resources.length; i++) {
      var resource = Game.resources[i];

      if (resource.id == id) return i;
    }

    return null;
  }

  static valueInRange(start, end, value) {
    console.log(`[Utils#valueInRange] ${start}, ${end}, ${value}`);

    if (start > end) throw Error('ERROR: Start must be less than end');

    return (start < value) && (value < end);
  }

  static pointInCircle(x, y, radius, px, py) {
    // Note: Defaulting to square calculation because it's simpler
    return this.pointInSquare(x, y, radius, px, py);
  }

  static pointInSquare(x, y, width, px, py) {
    console.log(`[Utils#pointInSquare] ${x}, ${y}, ${width}, ${px}, ${py}`);

    if (
      Utils.valueInRange((x - width), (x + width), px) &&
      Utils.valueInRange((y - width), (y + width), py)
    ) {
      return true;
    }

    return false;
  }
}
