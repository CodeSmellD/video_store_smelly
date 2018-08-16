function Rental(data) {
  this._data = data;

	Rental.prototype.getMovie = function() {
	  return this._data.movie;
	}

	Rental.prototype.getDaysRented = function() {
	  return this._data.daysRented;
	}
  
}

export { Rental };