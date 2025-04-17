// MERGE FUNCTION
// This function takes two sorted arrays and merges them into one sorted array
function merge(arr1, arr2) {
    const results = []; // This will store the merged, sorted result
    let i = 0; // Pointer for arr1
    let j = 0; // Pointer for arr2

    // Compare elements of both arrays while neither is fully traversed
    while (i < arr1.length && j < arr2.length) {
        // If the current element in arr1 is smaller, push it to results
        if (arr1[i] < arr2[j]) {
            results.push(arr1[i]);
            i++; // Move to next element in arr1
        } else {
            // Otherwise, push the element from arr2
            results.push(arr2[j]);
            j++; // Move to next element in arr2
        }
    }

    // At this point, one of the arrays might still have remaining elements

    // If there are leftover elements in arr1, add them to results
    while (i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }

    // If there are leftover elements in arr2, add them to results
    while (j < arr2.length) {
        results.push(arr2[j]);
        j++;
    }

    // Return the fully merged and sorted array
    return results;
}

// MERGESORT FUNCTION
// This is a recursive sorting function using the Merge Sort algorithm
function mergeSort(arr) {
    // Base case: if the array has 1 or no elements, it's already sorted
    if (arr.length <= 1) return arr;

    // Step 1: Find the midpoint to split the array
    const mid = Math.floor(arr.length / 2);

    // Step 2: Recursively sort the left half
    const left = mergeSort(arr.slice(0, mid));

    // Step 3: Recursively sort the right half
    const right = mergeSort(arr.slice(mid));

    // Step 4: Merge the sorted left and right halves
    return merge(left, right);
}

// Export the functions so they can be tested or used in other files
module.exports = { merge, mergeSort };
