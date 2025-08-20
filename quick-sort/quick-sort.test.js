function quickSort(nums) {
  // base case if array length 0, 1
  // get pivot as last number
  // smaller array sort, then larger array sort based on pivot
  // call quick sort with recursion left and right and contact and return
}

test("quickSOrt", function () {
  const input = [10, 8, 2, 1, 6, 3, 9, 4, 7, 5];
  const answer = quickSort(input);
  expect(answer).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
