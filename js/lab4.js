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
    let min = 100;
    let max = [0][0];
    let positionMin = '';
    let positionMax = '';
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        if (min > this.array[i][j]) {
          min = this.array[i][j];
          positionMin = `row ${i + 1} column ${j + 1}`;
        }
        if (max <= this.array[i][j]) {
          max = this.array[i][j];
          positionMax = `row ${i + 1} column ${j + 1}`;
        }
      }
    }
    return [min, max, positionMin, positionMax];
  };

  swapLines(firstLine, secondLine) {
    let copyFirstLine = this.copyLine(firstLine);
    let copySecondLine = this.copyLine(secondLine);

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.array[firstLine] = copySecondLine;
        this.array[secondLine] = copyFirstLine;
      }
    }
    this.printArray();
  };

  addLine() {
    let line = [];
    for (let i = 0; i < this.columns; i++) {
      line[i] = this.array.length + 1
    }
    this.array[this.array.length] = line;
    this.printArray();
  };

  sortBy() {
    this.array[this.array.length] = [];
    for (let index = 0; index < this.array.length - 1; index++) {
      for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < this.columns; j++) {
          if (this.array[i][j] < this.array[i + 1][j]) {
            this.swapLines(i, i + 1);
          }
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
  }

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

  document.getElementById('createArray').addEventListener('click', function () {
    showResults();
  });

  document.getElementById('getMinMax').addEventListener('click', function () {
    const getMinMax = twoDimensionalArray.getMinMax();
    document.getElementById('minOut').value = getMinMax[0];
    document.getElementById('maxOut').value = getMinMax[1];
    document.getElementById('positionMinOut').value = getMinMax[2];
    document.getElementById('positionMaxOut').value = getMinMax[3];

    showResults();
    document.getElementById('getMinMax').style.cssText = 'opacity: 1; transform: scaleX(1)'
  });

  document.getElementById('swapLines').addEventListener('click', function () {
    twoDimensionalArray.swapLines(0, 2);
    showResults();
  });

  document.getElementById('addLine').addEventListener('click', function () {
    clearResults();
    twoDimensionalArray.addLine();
    showResults();
  });

  document.getElementById('sortArray').addEventListener('click', function () {
    clearResults();
    twoDimensionalArray.sortBy();
    showResults();
  })
})

const showResults = () => {
  document.getElementById('results').style.cssText = 'opacity: 1; transform: scaleX(1)';
}

const clearResults = () => {
  document.getElementById('results').innerHTML = '';
}