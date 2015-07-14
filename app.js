function createStage() {
  var stage = new createjs.Stage("demoCanvas");
  return stage;
}

function createPlayer() {
  var circle = new createjs.Shape();
  circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 20);
  circle.x = 100;
  circle.y = 100;
  return circle;
}

var Game = function() {
  var _this = this;
  this.stage = createStage();
  this.player = createPlayer();
  this.render = function() {
    _this.stage.update();
  }

  this.stage.addChild(this.player);
  this.stage.addEventListener("stagemouseup", function(e) {
    createjs.Tween.get(_this.player, { loop: false })
    .to({ alpha: 50, x: e.stageX, y: e.stageY }, 100);
  });
  createjs.Ticker.setFPS(60);
  createjs.Ticker.addEventListener("tick", this.render);
}

window.addEventListener("load", function() {
  var game = new Game();
  game.render();
});
