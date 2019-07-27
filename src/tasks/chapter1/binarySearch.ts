/**
 * middle index of given numbers
 * @first - from
 * @second - to
 * return number
 */
function middle(first: number, second: number): number {
    return Math.ceil((second - first) / 2) + first;
  }

  /**
   * index of element in array
   * @arr - Array
   * @x - element
   * return number | null
   */
function binarySearch(arr: number[], x: number): number | null {
   const length: number = arr.length;
   // if array is empty or x not valid return null
   if (!length || (x !== 0 && !x)) { return null; }

  // retunr last index of
   const firstLastIndex: number = length - 1;
   const firstMiddleIndex: number = middle(0, firstLastIndex);

   function iter(firstIndex: number, middleIndex: number, lastIndex: number): number | null {
      const elemInMiddle = arr[middleIndex];

      // we found element and retunr index of element
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
