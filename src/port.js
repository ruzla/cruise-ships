function Port(name) {
  this.port = name;
  this.ships = [];
  // this.ports = [];
}

Port.prototype.addShip = function addShip(ship) {
  this.ships.push(ship);
};

Port.prototype.removeShip = function (shipToRemove) {
  // const shipIndex = this.ships.findIndex(shipIndex => shipIndex === shipToRemove);
  this.ships.splice(this.ships.indexOf(shipToRemove), 1);
};


module.exports = {
  Port,
};
