
describe('uniqueWordIdentifier', function() {
  it("returns true if array has duplicate words", function() {
    expect(uniqueWordIdentifier("hello world hello")).to.equal(true);
  });

  it("returns false if array doesn't have duplicate words", function() {
    expect(uniqueWordIdentifier("Great world hello")).to.equal(false);
  });
});


describe('uniquWordCalculator', function() {
  it("returns an object that contains unique words and amounts those words appear in the user's input", function() {
    expect(uniqueWordCalculator("hello world hello hello again")).to.eql({"hello": 3, "world": 1, "again": 1});
  });
});
