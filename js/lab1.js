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
    this.marks.forEach(mark => {
      if (mark >= 5) {
        quality++;
      }
      sum += mark;
    });
    return [max, min, gap, (quality * 100 / this.marks.length).toFixed(2), (sum / this.marks.length).toFixed(3)];
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const calculator = new Calculator();
  document.getElementById('calculate').addEventListener('click', function () {
    calculator.addElements(Number(document.getElementById('getNumber').value), Number(document.getElementById('getMark').value));
    const results = calculator.calculate();
    document.getElementById('marksOut').value = calculator.marks.sort((a, b) => a - b);
    document.getElementById('maxOut').value = results[0];
    document.getElementById('minOut').value = results[1];
    document.getElementById('gapOut').value = results[2];
    document.getElementById('qualityOut').value = results[3];
    document.getElementById('averageOut').value = results[4];
    document.getElementById('rotationOut').value = calculator.marks.slice(1).concat(calculator.marks.slice(0, 1));
    //Clear input and show results
    document.getElementById('results').style.cssText = 'opacity: 1; transform: scaleX(1)';
    document.getElementById('getNumber').readOnly = true;
    document.getElementById('getMark').value = '';
  })
})