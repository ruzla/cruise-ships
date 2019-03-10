function Ship(itinerary) {

  this.itinerary = itinerary;

  this.currentPort = itinerary.ports[0];

  this.previousPort = null;

  this.currentPort.addShip(this);

}

Ship.prototype.setSail = function () {
  this.currentPort = false;
};

Ship.prototype.dock = function (port) {
  this.currentPort = port;
};

module.exports = {
  Ship,
};