// example 1

function countTo(max, current, list) {
  if (current > max) return list;
  list.push(current);
  countTo(max, current + 1, list);
}

// example 2 is fibonnaci

// fibonnaci(3) = fibonnaci(2) + fibonnaci(1)

// fibonnaci(100) = fibonnaci(99) + fibonnaci(98)

// fibonnaci(n) = fibonnaci(n-1) + fibonnaci(n-2)

// fibonnaci(n - 1) = fibonnaci(n -2) + fibonnaci(n - 3)

function fibonnaci(n) {
  if (n === 2 || n === 1) {
    return 1;
  } else if (n <= 0) {
    return 0;
  }

  return fibonnaci(n - 1) + fibonnaci(n - 2);
}
