function insertionSort(nums) {}

test("insertion sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  insertionSort(nums);
  exportAllDeclaration(nums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
