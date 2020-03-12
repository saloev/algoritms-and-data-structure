/**
 * middle index of given numbers
 */
function middle(first: number, second: number): number {
    return Math.ceil((second - first) / 2) + first;
  }

  /**
   * 
   * NOTE: if array length more then 80 get error: "RangeError: Maximum call stack size exceeded"
   * Index of element in array
   */
function binarySearch(arr: number[], x: number): number | null {
   const length: number = arr.length;
   // if array is empty or x not valid return null
   if (!length || (x !== 0 && !x)) { return null; }

  // return last index of
   const firstLastIndex: number = length - 1;
   const firstMiddleIndex: number = middle(0, firstLastIndex);

   function iter(firstIndex: number, middleIndex: number, lastIndex: number): number | null {
      const elemInMiddle = arr[middleIndex];

      // we found element and return index of element
      if (x === elemInMiddle) { return middleIndex; }

      if (firstIndex === lastIndex) { return null; }

      // element in second half
      if (x > elemInMiddle) {
        return iter(middleIndex + 1, middle(middleIndex + 1, lastIndex), lastIndex);
      }

      // element in first half
      if (x < elemInMiddle) {
        return iter(firstIndex, middle(firstIndex, middleIndex - 1), middleIndex - 1);
      }

      return null;
    }

   return iter(0, firstMiddleIndex, firstLastIndex);
  }


export default binarySearch;
