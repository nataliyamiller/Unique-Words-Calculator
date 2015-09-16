
describe('uniqueWordIdentifier', function() {
  it("returns true if array has duplicate words", function() {
    expect(uniqueWordIdentifier("hello world hello")).to.equal(true);
  });

  it("returns false if array doesn't have duplicate words", function() {
    expect(uniqueWordIdentifier("Great world hello")).to.equal(false);
  });
});
