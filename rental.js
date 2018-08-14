function Rental(data) {

	  this._data = data;
	
  
	Rental.prototype.getDays = function() {
	  return this._data.days;
	}
  
	Rental.prototype.getMovieID = function() {
	  return this._data.movieID;
	}
}

export { Rental };