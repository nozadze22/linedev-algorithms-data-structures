function nestedAdd(array) {
  let sum = 0;

  for (const item of array) {
    if (Array.isArray(item)) {
      sum += nestedAdd(item); // რეკურსიულად დაითვლის შიდა მასივის ჯამს
    } else {
      sum += item;
    }
  }

  return sum;
}

test("nested arrays addition", () => {
  expect(nestedAdd([1, 2, [3, 4, [5, 6]]])).toBe(21);
  expect(nestedAdd([1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]])).toBe(55);
  expect(nestedAdd([[[[[[[[[[[5]]]]]]]]]]])).toBe(5);
});
