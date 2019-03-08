function Port(name) {
  this.port = name;
  this.ships = [];
}

Port.prototype.addShip = function (ship) {
  this.ships.push(ship);
};

Port.prototype.removeShip = function(ship) {
  const shipIndex = this.ships.findIndex(shipIndex => shipIndex === ship);
  this.ships.splice(shipIndex, 1);
}


module.exports = {
  Port,
};
