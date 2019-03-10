function Port(name) {
  this.port = name;
  this.ships = [];
}

Port.prototype.addShip = function addShip(ship) {
  this.ships.push(ship);
};

Port.prototype.removeShip = function (shipToRemove) {
  this.ships.splice(this.ships.indexOf(shipToRemove), 1);
};


module.exports = {
  Port,
};
