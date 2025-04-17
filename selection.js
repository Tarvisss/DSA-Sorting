// SELECTION SORT FUNCTION
function selectionSort(arr) {
    // Loop over the entire array
    for (let i = 0; i < arr.length; i++) {
      // Assume the smallest value is at the current index
      let lowest = i;
  
      // Loop through the remaining unsorted portion of the array
      for (let j = i + 1; j < arr.length; j++) {
        // If a smaller value is found, update the lowest index
        if (arr[j] < arr[lowest]) {
          lowest = j;
        }
      }
  
      // If the lowest value is not at the current index, swap them
      if (i !== lowest) {
        let temp = arr[i];
        arr[i] = arr[lowest];
        arr[lowest] = temp;
      }
    }
  
    // Return the sorted array
    return arr;
  }
  
  module.exports = selectionSort;
  