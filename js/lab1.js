class Calculator {
  constructor() {
    this.marks = [];
  }

  addElements(students, mark) {
    if (this.marks.length < students && mark > 0 && mark < 11) {
      this.marks.push(mark);
    }
  }

  calculate() {
    let quality = 0;
    let min = Math.min(...this.marks);
    let max = Math.max(...this.marks);
    let gap = max - min;
    let sum = 0;
    for (let i = 1; i < this.marks.length; i++) {
      if (this.marks[i] >= 5) {
        quality++;
      }
      sum += this.marks[i];
    }
    if (this.marks.length >= 1) {
      return {
        max,
        min,
        gap,
        quality: (quality * 100 / this.marks.length).toFixed(2),
        average: (sum / this.marks.length).toFixed(3)
      }
    }
  };

  mergeSort(arrToSort) {
    if (arrToSort.length < 2) {
      return arrToSort;
    }
    const middle = Math.floor(arrToSort.length / 2);
    const left = arrToSort.slice(0, middle);
    const right = arrToSort.slice(middle);

    return this.merge(this.mergeSort(left), this.mergeSort(right));
  };

  merge(left, right) {
    const results = [];
    while (left.length && right.length) {
      if (left[0] <= right[0]) {
        results.push(left.shift());
      }
      else {
        results.push(right.shift());
      }
    }
    return results.concat(left, right);
  };
}

document.addEventListener('DOMContentLoaded', function () {
  const calculator = new Calculator();
  document.getElementById('calculate').addEventListener('click', function () {
    calculator.addElements(Number(document.getElementById('getNumber').value), Number(document.getElementById('getMark').value));
    const results = calculator.calculate();
    document.getElementById('marksOut').value = calculator.mergeSort(calculator.marks);
    document.getElementById('maxOut').value = results.max;
    document.getElementById('minOut').value = results.min;
    document.getElementById('gapOut').value = results.gap;
    document.getElementById('qualityOut').value = results.quality;
    document.getElementById('averageOut').value = results.average;
    document.getElementById('rotationOut').value = calculator.marks.slice(1).concat(calculator.marks.slice(0, 1));
    //Clear input
    document.getElementById('getNumber').readOnly = true;
    document.getElementById('getMark').value = '';
  });
})
