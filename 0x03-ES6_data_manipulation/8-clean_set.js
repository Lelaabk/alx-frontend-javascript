// 8-clean_set.js

function cleanSet(set, startString) {
  let result = "";
  set.forEach(value => {
    if (value.startsWidth(startString)) {
      result += value.substring(startString.length) + "-";
    }
  });
  return result.slice(0, -1);
}

export default cleanSet;
