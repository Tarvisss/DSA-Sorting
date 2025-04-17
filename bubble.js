function bubbleSort(arr) {
    // Outer loop: This runs once for each element in the array.
    // Each pass "bubbles" the next largest element to the end.
    for (let i = 0; i < arr.length; i++) {

        // Flag to track if any swaps were made in this pass.
        // If no swaps happen, the array is already sorted.
        let swapped = false;

        // Inner loop: compares adjacent elements up to the unsorted portion.
        // The `- i` makes the loop shorter each time since the last i elements are sorted.
        for (let j = 0; j < arr.length - i; j++) {

            // If the current element is greater than the next one, we swap them.
            if (arr[j] > arr[j + 1]) {
                // Swap the two elements
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;

                // Mark that a swap occurred during this pass
                swapped = true;
            }
        }

        // Optimization: if no swaps happened during this pass,
        // the array is already sorted, so break out of the loop early.
        if (!swapped) break;
    }

    // Return the sorted array
    return arr;
}

// Export the function so it can be tested with Jest or used in other files
module.exports = bubbleSort;
