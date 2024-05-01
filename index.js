//You are given an array of numbers. Your task is to use iteration methods to filter and transform this array.

const numbers = [10, 13, 20, 25, 38, 35, 40];

/*****************************************************************
Part 1: Filtering

Write code to perform the following tasks using the filter method:
Q1) Create a new array containing numbers that are greater than or equal to 25.
Q2) Create a new array containing numbers that are divisible by 5.
******************************************************************/
const result = numbers.filter((num) => {
  return num >= 25;
});
const divi = numbers.filter((num) => {
  return num / 5;
});
console.log(result);
console.log(divi);

/*****************************************************************
Part 2: Mapping

Write code to perform the following tasks using the map method:

Q3) Create a new array that contains each number squared.
Q4) Create a new array that contains each number multiplied by 2.
******************************************************************/
const resultq2 = numbers.map((numap) => {
  return numap ** 2;
});
const restq2 = numbers.map((numap2) => {
  return numap2 * 2;
});
console.log(resultq2);
console.log(restq2);
/*****************************************************************
Part 3: Combining Filtering and Mapping

Combine the filter and map methods to perform the following tasks:

Q5) Filter the numbers that are greater than or equal to 20 and then square each of them.
Q6) Filter the numbers that are divisible by 5 and then multiply each of them by 3.
********************************************************************/

const resultq5 = numbers.filter((num) => {
  return num >= 25;
});
const res = resultq5.map((num) => {
  return resultq5 ** 2;
});

const resq5 = numbers.filter((num) => {
  return num / 5;
});
const resMilti = resq5.map((num) => {
  return num * 3;
});
