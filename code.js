function insertionSortReverse(arr) {
  for(let i = arr.length - 2; i >= 0; i--) {
    let val = arr[i];
    let j;
    for(j = i; (j < arr.length-1 && arr[j+1] < val); j++) {
      arr[j] = arr[j+1];
    }
    arr[j] = val;
  }
  return arr;
}
