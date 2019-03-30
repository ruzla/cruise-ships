(function exportPort() {
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

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Port;
  } else {
    window.Port = Port;
  }
}());
