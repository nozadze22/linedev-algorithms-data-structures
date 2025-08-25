function quickSort(nums) {
  // base case if array length 0, 1
  if (nums.length <= 1) return nums;
  // get pivot as last number
  const pivot = nums[nums.length - 1];
  const left = [];
  const right = [];
  // smaller array sort, then larger array sort based on pivot
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] < pivot) {
      left.push(nums[i]);
    } else {
      right.push(nums[i]);
    }
  }

  const sortedLeft = quickSort(left);
  const sortedRight = quickSort(right);
  // call quick sort with recursion left and right and contact and return
  return sortedLeft.concat(pivot, sortedRight);
}

test("quickSOrt", function () {
  const input = [10, 8, 2, 1, 6, 3, 9, 4, 7, 5];
  const answer = quickSort(input);
  expect(answer).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
