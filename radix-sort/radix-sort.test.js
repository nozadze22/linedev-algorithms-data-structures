function getDigit(number, place, longestNumber) {
  const string = number.toString(); // '20'
  const size = string.length; // 2
  const mod = longestNumber - size; // 4 - 2 = 2
  return string[place - mod] || 0; // '20'[3 - 2] = 0
}

// 20 3 4

function getLongestNumber(array) {
  let longest = 0;
  for (let i = 0; i < array.length; i++) {
    const currentLength = array[i].toString().length;
    longest = currentLength > longest ? currentLength : longest;
  }
  return longest;
}

function radixSort(array) {
  const longestNumber = getLongestNumber(array);
  const buckets = new Array(10).fill().map(() => []);

  for (let i = longestNumber - 1; i >= 0; i--) {
    while (array.length) {
      const curent = array.shift();
      buckets[getDigit(curent, i, longestNumber)].push(curent); // 10 buckets
    }

    for (let j = 0; j < 10; j++) {
      while (buckets[j].length) {
        array.push(buckets[j].shift());
      }
    }
  }

  return array;
}

describe("radix sort", function () {
  it("should sort correctly", () => {
    const nums = [
      20, 51, 3, 801, 415, 62, 4, 17, 19, 11, 1, 100, 1244, 104, 944, 854, 34,
      3000, 3001, 1200, 633,
    ];
    const ans = radixSort(nums);
    expect(ans).toEqual([
      1, 3, 4, 11, 17, 19, 20, 34, 51, 62, 100, 104, 415, 633, 801, 854, 944,
      1200, 1244, 3000, 3001,
    ]);
  });
  it("should sort 99 random numbers correctly", () => {
    const fill = 99;
    const nums = new Array(fill)
      .fill()
      .map(() => Math.floor(Math.random() * 500000));
    const ans = radixSort(nums);
    expect(ans).toEqual(nums.sort());
  });
});
