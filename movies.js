// export default movies = {
// 	F001: { title: 'Ran', code: 'regular' },
// 	F002: { title: 'Trois Couleurs: Bleu', code: 'regular' }
// 	// etc
//   };


// 	const {Rental} = require("./rental.js");

function Movie(data) {
    this._data = data;
  
		Movie.prototype.getId = function() {
			return this._data.id;
		}

	Movie.prototype.getTitle = function() {
    return this._data.title;
  }

  Movie.prototype.getCode = function() {
    return this._data.code;
  }
}
export { Movie };