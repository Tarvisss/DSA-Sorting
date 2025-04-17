/*
pivot accepts an array, a starting index, and an ending index.
It rearranges elements in the array so that all values less than the pivot
come before it, and all values greater come after.
The pivot is always assumed to be the element at the start index.
Returns the index where the pivot finally ends up.
*/

function pivot(arr, start = 0, end = arr.length - 1) {
    // Store the pivot value for comparison — it's the first element
    let pivotValue = arr[start];

    // swapIdx keeps track of the position where the next smaller element should go
    let swapIdx = start;

    // Loop through the array from the element after the pivot to the end
    for (let i = start + 1; i <= end; i++) {
        // If the current element is less than the pivot value...
        if (arr[i] < pivotValue) {
            // Move the swap index forward (we found a smaller element)
            swapIdx++;

            // Swap the current element with the one at swapIdx
            // This places smaller elements toward the front
            [arr[i], arr[swapIdx]] = [arr[swapIdx], arr[i]];
        }
    }

    // After the loop, swap the pivot with the element at the final swap index
    // This puts the pivot in its correct sorted position
    [arr[start], arr[swapIdx]] = [arr[swapIdx], arr[start]];

    // Return the index of the pivot's final position
    return swapIdx;
}


/*
quickSort is a recursive sorting function.
It sorts the array in-place by:
1. Picking a pivot (using the pivot function),
2. Recursively sorting the left part (less than pivot),
3. Recursively sorting the right part (greater than pivot).
*/

function quickSort(arr, left = 0, right = arr.length - 1) {
    // Base case: if left index is less than right index, keep sorting
    if (left < right) {
        // Partition the array and get the pivot index after placing it correctly
        let pivotIndex = pivot(arr, left, right);

        // Recursively apply quickSort to the left portion (elements < pivot)
        quickSort(arr, left, pivotIndex - 1);

        // Recursively apply quickSort to the right portion (elements > pivot)
        quickSort(arr, pivotIndex + 1, right);
    }

    // Return the sorted array
    return arr;
}

// Export the quickSort function so it can be used in other files or test suites
module.exports = { quickSort, pivot };
