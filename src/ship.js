function Ship(start) {
  this.startingPort = start;
}

Ship.prototype.setSail = function () {
  this.startingPort = '';
};


module.exports = { Ship };