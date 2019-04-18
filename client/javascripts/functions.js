// jshint esversion: 6

let reverseAllWord = send => {
  let result = "";
  let words = sent.split(" ");

  //reverse all words in sentence
  for (var i = 0; i < words.length; i++) {
    result = result + reverseStr(words[i]) + " ";
  }
  return result;
};
