import { getMinIndex } from "../min/index.js";
import { getMaxIndex } from "../max/index.js";

export const selectionSort = (arr, isDecrease = false) => {
    const sortedArr = [];

    for (let i = 0; i < arr.length;) {
        const index = isDecrease ? getMaxIndex(arr) : getMinIndex(arr);

        sortedArr.push(...arr.splice(index, 1));
    }

    return sortedArr;
}

// console.log(selectionSort([1, 4, 0 , 2, 3])); // [0, 1, 2, 3, 4]
// console.log(selectionSort([1, 4, 0 , 2, 3], true)); // [4, 3, 2, 1, 0]