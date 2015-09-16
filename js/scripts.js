
var uniqueWordIdentifier = function(userInput) {
  var words = userInput.split(" ").sort();
  for (var i = 0; i < words.length; i++) {
    if (words[i] === words[i+1]) {
      return true;
    }
  }
  return false;
};

var uniqueWordCalculator = function(userInput) {
  var words = userInput.split(" ");
  var results = {};

  for (var i = 0; i < words.length; i++) {
    if (!results[words[i]]) {
      results[(words[i])] = 1;
    } else {
      results[words[i]] +=1;
    }

    }
    return results;
  }
