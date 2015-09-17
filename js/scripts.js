var updatedUserInput = function(userInput) {
  return userInput.toLowerCase().replace(/[.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"").split(" ");
}

var wordsObject = function(updatedInput) {
  var results = {};
  for (var i = 0; i < updatedInput.length; i++) {
    if (!results[updatedInput[i]]) {
      results[(updatedInput[i])] = 1;
    } else {
      results[updatedInput[i]] +=1;
    }
  }
    return results;
}

var sortedValues = function(wordsObject) {
  var sorted = [];
  for (var key in wordsObject) {
    sorted.push([key, wordsObject[key]]);
    sorted.sort(function(a, b) {return b[1] - a[1]});
  }
    return sorted;
}

var uniqueWordsCalculator = function(userInput) {
  var updatedInput = updatedUserInput(userInput);
  var inputAsObject = wordsObject(updatedInput);
  return sortedValues(inputAsObject);
}
