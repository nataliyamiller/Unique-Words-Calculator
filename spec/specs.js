
describe('uniqueWordIdentifier', function() {
  it("returns true if array has duplicate words", function() {
    expect(uniqueWordIdentifier("hello world hello")).to.equal(true);
  });
});
