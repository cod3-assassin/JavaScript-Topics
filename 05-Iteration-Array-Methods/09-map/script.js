const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const doublenumber = numbers.map((number) => "Number " + number * 2);

console.log(doublenumber);

//Same With For Each

const doublenumber2 = [];
numbers.forEach((number) => {
  doublenumber2.push(number * 2);
});
console.log(doublenumber2);

const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

//Create an array of company name

const companyNames = companies.map((company) => company.name);
console.log(companyNames);

//Create an Array with just company and category

const companyInfo = companies.map((company) => {
  return {
    name: company.name,
    category: company.category,
  };
});
console.log(companyInfo);

//Create and Array of objects with name and  the length of the each compnay in years

const companyyears = companies.map((comapany) => {
  return {
    name: comapany.name,
    length: comapany.end - comapany.start,
  };
});
console.log(companyyears);

//Chain map Methods

const squareAndDouble = numbers
  .map((number) => Math.sqrt(number))
  .map((sqrt) => sqrt * 2);

console.log(squareAndDouble);

//Detaild version
const squareAndDouble2 = numbers
  .map(function (number) {
    return Math.sqrt(number);
  })
  .map(function (sqrt) {
    return sqrt * 2;
  })
  .map(function (sqrtdobule) {
    return sqrtdobule * 3;
  });

console.log(squareAndDouble2);

//Chaining diffrent Methods

const evenDouble = numbers
  .filter((number) => number % 2 === 0)
  .map((number) => number * 2);
console.log(evenDouble);
