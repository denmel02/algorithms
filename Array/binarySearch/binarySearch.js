/**
 * Find index of value in sorted array
 * @param {number[]} sortedArr sorted array
 * @param {number} value searched value
 * @returns {number | null} index of value
 */
export const binarySearch = (sortedArr, value) => {
    let start = 0;
    let end = sortedArr.length - 1;

    while (start <= end) {
        const middle = (end + start) >> 1;
        const middleValue = sortedArr[middle];

        if (value === middleValue) {
            return middle;
        }

        if (middleValue < value) {
            start = middle + 1;
            continue;
        }

        end = middle - 1;
    }

    return null;
}

// console.log(binarySearch([1, 2, 3, 4, 5, 6], 4)); // 3
// console.log(binarySearch([1, 2, 3, 4, 5, 6], 8)); // null