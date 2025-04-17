// INSERTION SORT FUNCTION
function insertionSort(arr) {
  // Loop through the array starting from the second element (index 1)
  for (let i = 1; i < arr.length; i++) {
    // Store the current value to compare and insert later
    let currentVal = arr[i];
    let j = i - 1;

    // Move elements of arr[0..i-1] that are greater than currentVal
    // to one position ahead of their current position
    while (j >= 0 && arr[j] > currentVal) {
      arr[j + 1] = arr[j]; // Shift the larger value to the right
      j--; // Move left in the array
    }

    // Place currentVal in the correct sorted position
    arr[j + 1] = currentVal;
  }

  // Return the sorted array
  return arr;
}

module.exports = insertionSort;
