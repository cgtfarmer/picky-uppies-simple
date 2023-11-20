class Player {

  id;

  #x;
  #y;
  #width;
  #height;
  #fill;
  #lineWidth;
  #fillColor;
  #strokeColor;
  #movementSpeed;
  #pickupRadius;

  constructor(x, y, width, height, fill, lineWidth, fillColor, strokeColor, movementSpeed, pickupRadius) {
    this.id = crypto.randomUUID();
    this.#x = x;
    this.#y = y;
    this.#width = width;
    this.#height = height;
    this.#fill = fill;
    this.#lineWidth = lineWidth;
    this.#fillColor = fillColor;
    this.#strokeColor = strokeColor;
    this.#movementSpeed = movementSpeed;
    this.#pickupRadius = pickupRadius;
  }

  getX() {
    return this.#x;
  }

  getY() {
    return this.#y;
  }

  getFill() {
    return this.#fill;
  }

  getLineWidth() {
    return this.#lineWidth;
  }

  getFillColor() {
    return this.#fillColor;
  }

  getStrokeColor() {
    return this.#strokeColor;
  }

  toString() {
    return `Player: id=${this.id}, x=${this.#x}, y=${this.#y}`;
  }

  move(x, y) {
    this.#x += (x * this.#movementSpeed);
    this.#y -= (y * this.#movementSpeed);
  }

  pickUp() {
    var resource = this.#findFirstResourceInPickupRadius();

    if (!resource) return;

    console.log(`Picked up Resource: ${resource}`);
    resource.die();
  }

  #findFirstResourceInPickupRadius() {
    for (var i = 0; i < Game.resources.length; i++) {
      var resource = Game.resources[i];

      if (
        Utils.pointInCircle(this.#x, this.#y, this.#pickupRadius, resource.getX(), resource.getY())
      ) {
        return resource;
      }
    }

    return null;
  }

  update() {
    if (Game.pressedKeys['a'] || Game.pressedKeys['ArrowLeft'])
      Game.player.move(-1, 0);

    if (Game.pressedKeys['d'] || Game.pressedKeys['ArrowRight'])
      Game.player.move(1, 0);

    if (Game.pressedKeys['w'] || Game.pressedKeys['ArrowUp'])
      Game.player.move(0, 1);

    if (Game.pressedKeys['s'] || Game.pressedKeys['ArrowDown'])
      Game.player.move(0, -1);

    if (Game.pressedKeys[' '])
      Game.player.pickUp();

    this.render();
  }

  render() {
    // console.log('[Player#render]');

    Game.canvasContext.beginPath();
    Game.canvasContext.lineWidth = this.#lineWidth;
    Game.canvasContext.strokeStyle = this.#strokeColor;
    Game.canvasContext.fillStyle = this.#fillColor;

    Game.canvasContext.rect(
      this.#x,
      this.#y,
      this.#width,
      this.#height
    );

    if (this.#fill) {
      Game.canvasContext.fill();
    }

    Game.canvasContext.stroke();
  }
}
