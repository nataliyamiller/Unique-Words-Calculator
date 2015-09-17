
// describe('uniqueWordIdentifier', function() {
//   it("returns true if array has duplicate words", function() {
//     expect(uniqueWordIdentifier(["hello", "world", "hello"])).to.equal(true);
//   });
//
//   it("returns false if array doesn't have duplicate words", function() {
//     expect(uniqueWordIdentifier(["great", "world", "hello"])).to.equal(false);
//   });
// });

describe('updatedUserInput', function() {
  it("removes special characters and returns user's input as an array of words in lower case format", function() {
    expect(updatedUserInput("Hello world, hello: I am here")).to.eql(["hello", "world", "hello", "i", "am", "here"]);
  });
});

describe('wordsObject', function() {
  it("turnes array of user's words into an object of unique words as keys, and numbers of those words duplications as values", function() {
    expect(wordsObject(["hello", "world", "hello", "hello", "again"])).to.eql({"hello": 3, "world": 1, "again": 1});
  });
});

describe('sortedValues', function() {
  it("will turn an object to an array of arrays and sort it by numeric values in a descending order", function() {
    var userObject = {"hello": 3, "world": 1};
    expect(sortedValues(userObject)).to.eql([["hello", 3], ["world", 1]]);
  });
});

describe('uniqueWordsCalculator', function() {
  it("will accept users input and return a sorted array of arrays", function() {
    expect(uniqueWordsCalculator("Hello world, hello: again hello world")).to.eql([["hello", 3], ["world", 2], ["again", 1]]);
  });
});
