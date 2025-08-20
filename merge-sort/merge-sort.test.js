function mergeSort(nums) {
  // base case
  if (nums.length < 2) return nums;
  // we need to slipt our array by 2
  const length = nums.length;
  const middle = Math.floor(length / 2);
  const left = nums.slice(0, middle);
  const right = nums.slice(middle);
  // our recursion of two sorted lists and return sorted list

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  return result.concat(left, right);
}

// helper function for make merge of this two array: left | right

test("merge sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const sorted = mergeSort(nums);
  expect(sorted).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
