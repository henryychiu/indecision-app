const add = (a, b) => {
  return a + b;
};
console.log(add(1,2));

const user = {
  name: 'Henry',
  cities: ['Union City', 'Fremont', 'Hayward'],
  printPlacesLived() {
    return this.cities.map((city) => this.name + ' has been to ' + city);
  }
};
console.log(user.printPlacesLived());

const multiplier = {
  numbers: [1,2,3],
  multiplyBy: 5,
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy);
  }
};

console.log(multiplier.multiply());