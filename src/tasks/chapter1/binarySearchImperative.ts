/**
 * middle index of given numbers
 */
function middle(first: number, second: number): number {
  return Math.ceil((second - first) / 2) + first;
}

export default (arr: number[], numb: number): number | null => {
  let resIndex;
  let startIndex = 0;
  let lastIndex = arr.length - 1;
  let middleIndex = middle(startIndex, lastIndex);
  do {
    const elemInMiddle = arr[middleIndex];

    if (elemInMiddle === numb) {
      resIndex = middleIndex;
    } else if (startIndex === lastIndex) {
      resIndex = null;
    } else if (elemInMiddle > numb) {
      lastIndex = middleIndex - 1;
      middleIndex = middle(startIndex, lastIndex);
    } else {
      startIndex = middleIndex + 1;
      middleIndex = middle(startIndex, lastIndex);
    }
  } while (resIndex === undefined);

  return resIndex;
};
