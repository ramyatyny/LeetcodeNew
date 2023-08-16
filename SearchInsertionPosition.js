let number=[1,3,5,6]
let target = 5
var searchInsert = function(number, target) {
    for (let index = 0; index < number.length; index++) {
    if (target <= number[index]) {
      return index;
    }
  }
  return number.length;
};
