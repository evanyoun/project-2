// jshint esversion: 6
//3-a
let reverseAllWords = send => {
  let result = "";
  let words = send.split("");

  //reverse all words in sentence
  for (var i = 0; i < words.length; i++) {
    result = words[i] + result;
  }
  return result;
};

//3-b
let reverseAllWords2 = send => {
  let result = "";
  let words = send.split("");
  words.forEach(function(c) {
    result = c + result;
  });
  return result;
};
