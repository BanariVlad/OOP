class String {
  constructor(string) {
    this.string = string;
    this.allWords = this.string.split(' ');
  }

  ccountWords() {
    return this.string.split(/\b/).length / 2 + 0.5;
  }

  findLongestWord() {
    let longestWord = this.allWords[0];
    for (let i = 1; i < this.allWords.length; i++) {
      if (this.allWords[i].length > longestWord.length) {
        longestWord = this.allWords[i];
      }
    }
    return longestWord;
  }

  deleteLongestWord(wordToDelete) {
    for (let i = 0; i< this.allWords.length; i++) {
      if (this.allWords[i] === wordToDelete) {
        delete this.allWords[i]
      }
    }
    return this.allWords;
  }
  
}

