function insertionSort(nums) {
  for (let i = 1; i < nums.length; i++) {
    let numberToInsert = nums[i];
    let j;

    for (j = i - 1; nums[j] > numberToInsert && j >= 0; j--) {
      nums[j + 1] = nums[j];
    }

    nums[j + 1] = numberToInsert;
  }

  return nums;
}

test("insertion sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  insertionSort(nums);
  expect(nums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
