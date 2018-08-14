import { Rental } from './rental';

function Customer(data) {
    this._data = data;
  

  Customer.prototype.getName = function() {
    return this._data.name;
  }

  Customer.prototype.getRentals = function() {
	let rentals = []
	for(let i = 0; i < this._data.code.length; i++){
		rentals[i] = new Rental(r);
	}
	return rentals;
  }
}
export { Customer };