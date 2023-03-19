/**
 * Find minimal element's index
 * @param {number[]} arr array of numbers
 * @returns {number} minimal element's index
 */
export const getMinIndex = (arr) => {
    let minValue = arr[0];
    let minIndex = 0;

    arr.forEach((value, index) => {
        if (minValue > value) {
            minValue = value;
            minIndex = index;
        }
    });

    return minIndex;
}

// console.log(getMinIndex([1, 4, 0, 7])); // 2