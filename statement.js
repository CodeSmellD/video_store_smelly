function Statement() {

  Statement.prototype.amountFor= function(rental) {
    let result = 0;
  
    switch (rental.getMovie().getPriceCode()) {
      case 'REGULAR':
        result += 2;
        if (rental.getDaysRented() > 2) {
          result += (rental.getDaysRented() - 2) * 1.5;
        }
        break;
      case 'NEW_RELEASE':
        result += rental.getDaysRented() * 3;
        break;
      case 'CHILDREN':
        result = 1.5;
        if (rental.getDaysRented() > 3) {
          result += (rental.getDaysRented() - 3) * 1.5;
        }
        break;
    }
    return result;
  }
  
  
  Statement.prototype.totalAmountFor= function(customer) {
    let result = 0;
    for (let r of customer.getRentals()) {
      result += this.amountFor(r);
    }
    return result;
  }
  
  Statement.prototype.totalFrequentRenterPointsFor= function(customer) {
    let result = 0;
    for (let r of customer.getRentals()) {
      result += this.frequentRenterPointsFor(r);
    }
    return result;
  }
  
  Statement.prototype.frequentRenterPointsFor= function(rental) {
    return (rental.getMovie().getPriceCode() === 'NEW_RELEASE' && rental.getDaysRented() > 2) ? 2 : 1;
  }
  
  Statement.prototype.statement= function(customer) {
  
    let result = `Rental Record for ${customer.getName()}\n`;
  
    for (let r of customer.getRentals()) {
      result += `\t${r.getMovie().getTitle()}\t${this.amountFor(r)}\n`;
    }
  
    result += `Amount owed is ${this.totalAmountFor(customer)}\n`;
    result += `You earned ${this.totalFrequentRenterPointsFor(customer)} frequent renter points\n`;
  
    return result;
  }

}

export { Statement };
