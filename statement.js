import { Customer } from './customer';

// mock data
// const {movies} = require('./movies');


function Statement() {


}

Statement.prototype.movieFor= function(rental, movies) {
  return movies[rental.movieID];
}

Statement.prototype.amountFor= function(r, movies) {
  let result = 0;

  // determine amount for each movie
  switch (this.movieFor(r, movies).code) {
    case 'regular':
      result = 2;
      if (r.days > 2) {
        result += (r.days - 2) * 1.5;
      }
      break;
    case 'new':
      result = r.days * 3;
      break;
    case 'childrens':
      result = 1.5;
      if (r.days > 3) {
        result += (r.days - 3) * 1.5;
      }
      break;
  }
  return result;
}

Statement.prototype.totalAmount= function(customer, movies) {
  let result = 0;
  for (let r of customer.rentals) {
    result += this.amountFor(r, movies);
  }
  return result;
}

Statement.prototype.totalFrequentRenterPoints= function(customer, movies) {
  let result = 0;
  for (let r of customer.rentals) {
    result += this.frequentRenterPointsFor(r, movies);
  }
  return result;
}

Statement.prototype.frequentRenterPointsFor= function(r, movies) {
  // add frequent renter points
  // add bonus for a two day new release rental
  return (this.movieFor(r, movies).code === 'new' && r.days > 2) ? 2 : 1;
}

Statement.prototype.statement= function(customerArgs, movies) {


  const customer = new Customer(customerArgs);
  let result = `Rental Record for ${customer.name}\n`;

  for (let r of customer.rentals) {
    result += `\t${this.movieFor(r, movies).title}\t${this.amountFor(r, movies)}\n`;
  }

  // add footer lines
  result += `Amount owed is ${this.totalAmount(customer, movies)}\n`;
  result += `You earned ${this.totalFrequentRenterPoints(customer, movies)} frequent renter points\n`;

  return result;
}

export { Statement };
// console.log(htmlStatement(customer, movies));
// console.log(statement(customer, movies));
