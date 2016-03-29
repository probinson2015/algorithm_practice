function partition(arr, leftIdx, rightIdx){
  var pivot = arr[Math.floor((rightIdx + leftIdx) / 2)];
  while(leftIdx <= rightIdx){
    while(arr[leftIdx] < pivot){ 
      leftIdx++; 
    } 
    while(arr[rightIdx] > pivot){
      rightIdx--;
    }
    if(leftIdx <= rightIdx){
      var temp = arr[leftIdx];
      arr[leftIdx] = arr[rightIdx];
      arr[rightIdx] = temp;
      leftIdx++;
      rightIdx--;
    }
  }
  return leftIdx;
};

function quickSort(arr, start, end){
  start = start || 0;
  end = end || arr.length - 1;
  var idx = partition(arr, start, end);
  if (arr.length < 2){
    // just in case array is tiny, don't need to run quicksort on it!
    return arr;
  }
  if(start < idx - 1){
    quickSort(arr, start, idx-1);
  }
  if(idx < end){
    quickSort(arr, idx, end);
  }
  // done sorting, leaves function
};

var arr = [100,4,2,10,3,2];
quickSort(arr);
console.log(arr);