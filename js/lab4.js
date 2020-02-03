class CustomArray {
  constructor(rows, columns) {
    this.array = [];
    this.rows = rows;
    this.columns = columns;
  }

  createArray() {
    for (let i = 0; i < this.rows; i++) {
      this.array[i] = [];
      for (let j = 0; j < this.columns; j++) {
        this.array[i][j] = i + 1;
      }
    }
  };

  getMinMax() {
    let min = this.array[0][0];
    let max = this.array[0][0];
    let positionMin = {
      row: 0,
      column: 0
    };
    let positionMax = {
      row: 0,
      column: 0
    };
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        if (min > this.array[i][j]) {
          min = this.array[i][j];
          positionMin = {
            row: i + 1,
            column: i + 1
          }
        }
        if (max <= this.array[i][j]) {
          max = this.array[i][j];
          positionMax = {
            row: i + 1,
            column: i + 1
          }
        }
      }
    }
    return {
      min,
      max,
      positionMin,
      positionMax
    }
  };

  swapLines(firstLine, secondLine) {
    let copyFirstLine = this.copyLine(firstLine);
    let copySecondLine = this.copyLine(secondLine);
    this.array[firstLine] = copySecondLine;
    this.array[secondLine] = copyFirstLine;
  };

  addLine() {
    let line = [];
    for (let i = 0; i < this.columns; i++) {
      line[i] = this.array.length + 1
    }
    this.array[this.array.length] = line;
    return this.array;
  };

  sortBy() {
    this.array[this.array.length] = [];
    for (let index = 0; index < this.array.length - 1; index++) {
      for (let i = 0; i < this.rows; i++) {
        if (this.array[i] < this.array[i + 1]) {
          this.swapLines(i, i + 1);
        }
      }
    }
    return this.array;
  };

  copyLine(line) {
    let copy = [];
    for (let i = line; i < line + 1; i++) {
      for (let j = 0; j < this.columns; j++) {
        copy[j] = this.array[i][j];
      }
    }
    return copy;
  };

  printArray() {
    for (let i = 0; i < this.array.length; i++) {
      let li = document.createElement('li');
      li.innerText = this.array[i];
      document.getElementById('results').appendChild(li);
    }
  }
}

document.addEventListener('DOMContentLoaded', function () {

  let twoDimensionalArray = new CustomArray(document.getElementById('rowsIn').value, document.getElementById('columnsIn').value)
  twoDimensionalArray.createArray();

  document.getElementById('getMinMax').addEventListener('click', function () {
    const getMinMax = twoDimensionalArray.getMinMax();
    document.getElementById('minOut').value = getMinMax.min;
    document.getElementById('maxOut').value = getMinMax.max;
    document.getElementById('positionMinOut').value = getMinMax.positionMin.row + " " + getMinMax.positionMin.column;
    document.getElementById('positionMaxOut').value = getMinMax.positionMax.row + " " + getMinMax.positionMax.column;
  });

  document.getElementById('swapLines').addEventListener('click', function () {
    clearResults();
    twoDimensionalArray.swapLines(0, 2);
    twoDimensionalArray.printArray();
  });

  document.getElementById('addLine').addEventListener('click', function () {
    clearResults();
    twoDimensionalArray.addLine();
    twoDimensionalArray.printArray();
  });

  document.getElementById('sortArray').addEventListener('click', function () {
    clearResults();
    twoDimensionalArray.sortBy();
    twoDimensionalArray.printArray();
  });

  const clearResults = () => {
    document.getElementById('results').innerHTML = '';
  }
})