var updatedUserInput = function(userInput) {
  return userInput.toLowerCase().replace(/[.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"").split(" ");
};

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
};

var sortedValues = function(wordsObject) {
  var sorted = [];
  for (var key in wordsObject) {
    sorted.push([key, wordsObject[key]]);
    sorted.sort(function(a, b) {return b[1] - a[1]});
  }
    return sorted;
};

var isUserUnique = function(userInput) {
  var sortedValues = uniqueWordsCalculator(userInput);
  if (sortedValues[0][1] === 1) {
    return true;
  } else {
    return false;
  }
};

var uniqueWordsCalculator = function(userInput) {
  var updatedInput = updatedUserInput(userInput);
  var inputAsObject = wordsObject(updatedInput);
  return sortedValues(inputAsObject);
};

$(document).ready(function() {
  $("form#sentence").submit(function(event) {
    var userInput = $("input#user-input").val();
    var result1 = isUserUnique(userInput);
    var result2 = uniqueWordsCalculator(userInput);

    if(result1) {
      $("#result-1").show();
    } else {
      $("#result-1").hide();
    }
    event.preventDefault();
  });
});
