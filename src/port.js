function Port(name) {
  this.port = name;
  this.ships = [];
}

Port.prototype.addShip = function addShip(ship) {
  this.ships.push(ship);
};

Port.prototype.removeShip = function removeShip(shipToRemove) {
  const shipIndex = this.ships.findIndex(ship => ship === shipToRemove);
  this.ships.splice(shipIndex, 1);
};


module.exports = {
  Port,
};
