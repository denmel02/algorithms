/**
 * Find max element's index
 * @param {number[]} arr array of numbers
 * @returns {number} max element's index
 */
export const getMaxIndex = (arr) => {
    let maxValue = arr[0];
    let maxIndex = 0;

    arr.forEach((value, index) => {
        if (maxValue < value) {
            maxValue = value;
            maxIndex = index;
        }
    });

    return maxIndex;
}

// console.log(getMaxIndex([1, 4, 0, 7])); // 3