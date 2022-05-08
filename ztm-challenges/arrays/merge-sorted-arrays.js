const mergeSortedArrays = (arr, arr2) => [...arr, ...arr2].sort();

const mergeSortedArrays2 = (arr1, arr2) => {
  const mergedArray = [];
  let array1Item = arr1[0];
  let array2Item = arr2[0];
  let i = 1;
  let j = 1;
  if (arr1.length === 0) {
    return arr2;
  }
  if (arr2.length === 0) {
    return arr1;
  }
  while (array1Item || array2Item) {
    if (!array2Item && array1Item < array2Item) {
      mergedArray.push(array1Item);
      array1Item = arr1[i];
      i++;
    } else {
      mergedArray.push(array2Item);
      array2Item = arr2[j];
      j++;
    }
  }
};

const mergeSortedArrays3 = (arr1, arr2) => {
  const sortedArr = [];

  if (arr1.length === 0) {
    return arr2;
  }
  if (arr2.length === 0) {
    return arr1;
  }
  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      sortedArr.push(arr1.shift());
    } else {
      sortedArr.push(arr2.shift());
    }
  }
  // use spread operator and create a new array, combining the three arrays
  return [...sortedArr, ...left, ...right];
};
