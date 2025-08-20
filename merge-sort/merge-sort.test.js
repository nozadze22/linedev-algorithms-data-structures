function mergeSort(nums) {
  // base case
  // we need to slipt our array by 2
  // our recursion of two sorted lists and return sorted list
}

// helper function for make merge of this two array: left | right

test("merge sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const sorted = mergeSort(nums);
  expect(sorted).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
