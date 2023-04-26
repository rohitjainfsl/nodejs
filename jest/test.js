function sum(a, b) {
  return a + b;
}

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(4);
});

test("concatenates 2 strings", () => {
  expect(sum("Hello", "World")).toBe("HelloWorld");
});
