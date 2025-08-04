// big _ O

// 3x*2 + x + 1

// x = 5

// 1 - 75 , 2 - 5, 3 - 1

//  5000000

// 1 - 75000000000000 2 - 5000000 3 - 1

function crossAdd(input) {
  var answer = 0;

  for (let i = 0; i < input.length; i++) {
    const goingUp = input[i];
    const goingDown = input[input.length - 1 - i];
    answer.push(goingUp + goingDown);
  }

  return answer;
}

function find(needle, haystack) {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle) return true;
  }
}

// haystack = 10000000000 elemnts in array needle = 5

function makeTupes(input) {
  let answer = [];
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length; j++) {
      answer.push([input[i], input[j]]);
    }
  }

  return answer;
}

function getMiddleOfArray(array) {
  return array[Math.floor(array.length / 2)];
}
