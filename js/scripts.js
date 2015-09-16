
var uniqueWordIdentifier = function(userInput) {
  var words = userInput.split(" ").sort();
  for (var i = 0; i < words.length; i++) {
    if (words[i] === words[i+1]) {
      return true;
    }
  }
  return false;
};




// var uniqueWordCalculator = function(userInput) {
//   var arrayInput = (sentenceSplitter(userInput));
//   result = {};
//
//   }
// }
