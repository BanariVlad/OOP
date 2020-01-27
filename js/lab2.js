class Fibonacci {
  constructor() {
    this.fibNumbers = [];
  }

  fibonacciNumbers(n) {
    this.fibNumbers[0] = 0;
    this.fibNumbers[1] = 1;
    for (let i = 2; i < n; i++) {
      this.fibNumbers[i] = this.fibNumbers[i - 1] + this.fibNumbers[i - 2];
    }
  }

  isFibonacci(number) {
    let i = 0;
    let find = true;
    while (i < this.fibNumbers.length && find) {
      if (number == this.fibNumbers[i]) {
        find = false;
      }
      i++;
    }
    if (find === false) {
      return `${number} - Fibonacci number`;
    } else {
      return `${number} - not a Fibonacci number`;
    }
  }

  intervalFibonacci(min, max) {
    let interval = [];
    let intervalFibonacci = [];
    let intervalFibonacciPrime = [];
    //Transforming interval to array
    for (let i = min; i <= max; i++) {
      interval.push(i);
    }
    // All Fibonacci numbers from interval
    interval.forEach(index => {
      if (interval.includes(index) === this.fibNumbers.includes(index)) {
        intervalFibonacci.push(index);
      }
    });
    //All Fibonacci Prime numbers from interval
    interval.forEach(index => {
      if (this.isPerfectNumber(index) && interval.includes(index) === this.fibNumbers.includes(index)) {
        intervalFibonacciPrime.push(index);
      }
    });
    return [intervalFibonacci, intervalFibonacciPrime];
  }

  isPerfectNumber(n) {
    let divisors = new Array();
    for (let i = 0; i <= n; i++) {
      if (n % i === 0) {
        divisors.push(i);
      }
    }
    return (divisors.length === 2 ? true : false);
  }
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('calculate').addEventListener('click', function() {
    const fibonacci = new Fibonacci();
    fibonacci.fibonacciNumbers(document.getElementById('nNumbersIn').value);
    const intervals = fibonacci.intervalFibonacci(document.getElementById('intervalMinIn').value, document.getElementById('intervalMaxIn').value);
    document.getElementById('fibonacciOut').value = fibonacci.fibNumbers;
    document.getElementById('isFibonacciOut').value = fibonacci.isFibonacci(document.getElementById('numberIn').value);
    document.getElementById('intervalOut').value = intervals[0];
    document.getElementById('intervalPrimeOut').value = intervals[1];
    document.getElementById('results').style.cssText = 'opacity: 1; transform: scaleX(1)';
  });
})
