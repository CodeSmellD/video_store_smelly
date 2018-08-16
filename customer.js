function Customer(data) {
  this._data = data;

  Customer.prototype.getRentals = function() {
    return this._data.rentals;
  }

  Customer.prototype.getName = function() {
    return this._data.name;
  }

}
export { Customer };