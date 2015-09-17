
describe('updatedUserInput', function() {
  it("removes special characters and returns user's input as an array of words in lower case format", function() {
    expect(updatedUserInput("Hello world, hello: I am here")).to.eql(["hello", "world", "hello", "i", "am", "here"]);
  });
});

describe('wordsObject', function() {
  it("turns an array of user's words into an object of unique words as keys and numbers of duplicates as values", function() {
    expect(wordsObject(["hello", "world", "hello", "hello", "again"])).to.eql({"hello": 3, "world": 1, "again": 1});
  });
});

describe('sortedValues', function() {
  it("turns an object into an array of arrays and sort it by numeric values in a descending order", function() {
    var userObject = {"hello": 3, "world": 1};
    expect(sortedValues(userObject)).to.eql([["hello", 3], ["world", 1]]);
  });
});

describe('isUserUnique', function() {
  it("returns true if user's input doesn't have any duplicate words", function() {
    expect(isUserUnique("Hello, great world")).to.equal(true);
  });

  it("returns false if user's input has duplicate words", function() {
    expect(isUserUnique("Hello, hello, so great world")).to.equal(false);
  });
});

describe('uniqueWordsCalculator', function() {
  it("accepts user's input and turns it into a sorted array of arrays", function() {
    expect(uniqueWordsCalculator("Hello world, hello: again hello world")).to.eql([["hello", 3], ["world", 2], ["again", 1]]);
  });
});
