// 7-has_array_values.js

function hasValuesFromArray(set, array) {
    for (const value of array) {
      if (!set.has(value)) {
        return false;
      }
    }
    return true;
  }
  
  export default hasValuesFromArray;
  