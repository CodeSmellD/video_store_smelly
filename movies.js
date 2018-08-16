function Movie(data) {
  this._data = data;

	Movie.prototype.getTitle = function() {
    return this._data.title;
  }

  Movie.prototype.getPriceCode = function() {
    return this._data.priceCode;
  }

}
export { Movie };