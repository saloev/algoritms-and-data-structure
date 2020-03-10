function maxElemInArray(arr: number[]) {
    if (!Array.isArray(arr) || !arr[0]) { return null; }

    let maxElem = arr[0];

    // TODO fix type error
    // @ts-ignore
    arr.map((elem: number) => {
        if (maxElem < elem) {
        maxElem = elem;
        }
    });

    return maxElem;
}

function simpleSort(arr: number[]): number[] | null {
    if (!Array.isArray(arr) || !arr[0]) { return null; }

    function iter(sortedArray: number[], seachFrom: number): number[] | null {
        if (seachFrom > arr.length ) { return sortedArray; }

        const getMaxElem = maxElemInArray(arr.slice(seachFrom));
        console.log(`slice--------`, arr.slice(seachFrom), `max element`, getMaxElem);

        // TODO fix type error
        // @ts-ignore
        return iter([...sortedArray, getMaxElem], seachFrom + 1);
    }

    return iter([], 0);
}

export default simpleSort;
