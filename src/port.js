function Port(name) {
  this.port = name;
  this.ships = [];
}

Port.prototype.addShip = function addShip(ship) {
  this.ships.push(ship);
};

Port.prototype.removeShip = function removeShip(shipToRemove) {
  this.ships.splice(this.ships.findIndex(ship => ship === shipToRemove), 1);
};


module.exports = {
  Port,
};
