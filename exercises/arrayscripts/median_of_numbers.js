let numbers1 = [83, 80, 92, 86, 100];

function numericSortAsc(a, b) {
  return a - b;
}

function hasEvenNumberOfElements(array) {
  return array.length % 2 == 0;
}

function getMedian(numbers) {
  let sorted = numbers.sort(numericSortAsc);
  console.log(sorted);
  let isEven = hasEvenNumberOfElements(sorted);
  let half = Math.floor(sorted.length / 2);
}

getMedian(numbers1);
