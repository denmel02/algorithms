/**
 * Quick sort
 * @param {T[]} array array of T
 * @param {(target: T, other: T) => boolean} callback function compare target more then other
 * @returns {T[]} sorted array
 */
export const quickSort = (array, callback) => {
    if (array.length < 2) {
         return array;
    }

    const target = array[0];
    const leftArray = [];
    const rightArray = [];

    for (let i = 1; i < array.length; i ++) {
        if (callback(target, array[i])) {
            leftArray.push(array[i]);
        } else {
            rightArray.push(array[i]);
        }
    }

    return [...quickSort(leftArray, callback), target, ...quickSort(rightArray, callback)];
}

// console.log(quickSort([1, 4, 0, 2, 3], (target, other) => target > other)); // [0, 1, 2, 3, 4]
// console.log(quickSort([1, 4, 0, 2, 3], (target, other) => target < other)); // [4, 3, 2, 1, 0]