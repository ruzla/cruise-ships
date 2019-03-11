function Port(name) {
  this.port = name;
  this.ships = [];
}

Port.prototype.addShip = function addShip(ship) {
  this.ships.push(ship);
};

Port.prototype.removeShip = function (shipToRemove) {
  const shipIndex = this.ships.findIndex(shipIndex => shipIndex === shipToRemove);
  this.ships.splice(shipIndex, 1);
};


module.exports = {
  Port,
};
