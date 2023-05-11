

function numericSortAsc(a, b) {
  return a - b;
}

function hasOddNumberOfElements(array) {
  return array.length % 2;
}

function getIndexOfMiddleElement(array) {
  return Math.floor(array.length / 2);
}

function getMedian(numbers) {
  numbers.sort(numericSortAsc);
  let indexOfMiddleElement = getIndexOfMiddleElement(numbers);
  let middleElement = numbers[indexOfMiddleElement];
  let elementBeforeMiddleElement = numbers[indexOfMiddleElement - 1];

  if (hasOddNumberOfElements(numbers)) {
    return middleElement;
  } else {
    return (elementBeforeMiddleElement + middleElement) / 2;
  }
}

let numbers1 = [83, 80, 92, 86, 100];
let numbers2 = [80, 83, 86, 87, 92, 100];

console.log(getMedian(numbers1));
console.log(getMedian(numbers2));
