class Resource {

  id;

  #x;
  #y;
  #radius;
  #fill;
  #lineWidth;
  #fillColor;
  #strokeColor;
  #startAngle;
  #endAngle;
  #counterclockwise;

  constructor(x, y, radius, fill, lineWidth, fillColor, strokeColor) {
    this.id = crypto.randomUUID();
    this.#x = x;
    this.#y = y;
    this.#fill = fill;
    this.#lineWidth = lineWidth;
    this.#radius = radius;
    this.#fillColor = fillColor;
    this.#strokeColor = strokeColor;
    this.#startAngle = 0;
    this.#endAngle = (2 * Math.PI);
    this.#counterclockwise = false;
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

  getRadius() {
    return this.#radius;
  }

  getFillColor() {
    return this.#fillColor;
  }

  getStrokeColor() {
    return this.#strokeColor;
  }

  toString() {
    return `Resource: id=${this.id}, x=${this.#x}, y=${this.#y}`;
  }

  die() {
    var index = Utils.findResourceIndexById(this.id);

    if (index == null) {
      console.log('ERROR: Could not kill resource');
      return;
    }

    Game.resources.splice(index, 1);
  }

  update() {
    this.render();
  }

  render() {
    Game.canvasContext.beginPath();
    Game.canvasContext.lineWidth = this.#lineWidth;
    Game.canvasContext.strokeStyle = this.#strokeColor;
    Game.canvasContext.fillStyle = this.#fillColor;

    Game.canvasContext.arc(
      this.#x,
      this.#y,
      this.#radius,
      this.#startAngle,
      this.#endAngle,
      this.#counterclockwise
    );

    if (this.#fill) {
      Game.canvasContext.fill();
    }

    Game.canvasContext.stroke();
  }
}
