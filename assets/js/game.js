class Game {
  static canvasId = '#canvas';
  static canvas = document.querySelector(Game.canvasId);
  static canvasContext = this.canvas.getContext('2d');

  static player;
  static resources = [];
  static pressedKeys = {};

  static init() {
    Game.player = new Player(
      (Game.canvas.width / 2),
      (Game.canvas.height / 2),
      50,
      50,
      true,
      2,
      Colors.white,
      Colors.black,
      10,
      50
    );

    for (var i = 0; i < 10; i++) {
      var resource = Randomizer.createRandomResource();
      Game.resources.push(resource);
    }

    window.addEventListener('keydown', Game.handleKeyDown);
    window.addEventListener('keyup', Game.handleKeyUp);
  }

  static start() {
    window.setInterval(Game.update, 50);
  }

  static deleteResourceById(id) {
    var index = Utils.findResourceIndexById(id);

    if (index == null) {
      console.log('ERROR: Could not delete Resource');
      return;
    }

    Game.resources.splice(index, 1);
  }

  static update() {
    Game.clearFrame();

    for (var resource of Game.resources) {
      resource.update();
    }

    Game.player.update();
  }

  static clearFrame() {
    Game.canvasContext.clearRect(0, 0, canvas.width, canvas.height);
  }

  static handleKeyDown(event) {
    event.preventDefault();

    // console.log(`[Game#handleKeyDown] ${event.key}`);

    Game.pressedKeys[event.key] = true;
  }

  static handleKeyUp(event) {
    event.preventDefault();

    // console.log(`[Game#handleKeyUp] ${event.key}`);

    Game.pressedKeys[event.key] = undefined;
  }
}
