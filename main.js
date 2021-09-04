const MAX = 100;

for (let i = 1; i <= MAX; i++) {
  console.log(i % 15 === 0 ? "Fizzbuzz" : i % 5 === 0 ? "Buzz" : i % 3 === 0 ? "Fizz" : i);
}