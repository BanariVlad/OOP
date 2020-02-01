class CustomString {
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
    for (let i = 0; i < this.allWords.length; i++) {
      if (this.allWords[i] === wordToDelete) {
        delete this.allWords[i]
      }
    }
    return this.allWords;
  }

  fileWordCount(input) {
    const reader = new FileReader();
    reader.onload = () => {
      const lines = reader.result.split(/\W+/);
      console.log(lines.length);
    }
    reader.readAsText(input.files[0]);
  }
}

class FileString {
  fileWordCount(input) {
    const reader = new FileReader();
    reader.onload = () => {
      const lines = reader.result.split(/\W+/);
      console.log(lines.length);
    }
    reader.readAsText(input.files[0]);
  }
 
}
