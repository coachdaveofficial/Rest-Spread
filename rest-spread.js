function filterOutOdds() {
    var nums = [...arguments];
    return nums.filter(num => num % 2 === 0)
  }

  function findMin() {
    let nums = [...arguments];
    return Math.min(...nums);
  }

  function mergeObjects(first, second) {
    let newObj = {...first, ...second}
    return newObj;
    
  }


  function doubleAndReturnArgs(arr, ...nums) {
    let numArr = [...nums] 
    const doubled = numArr.map(num => num *2)
    doubled.unshift(...arr);
    
    return doubled;
  }


/** remove a random element in the items array
and return a new array without that item. */

function removeRandom(items) {
    let range = Math.floor(Math.random() * 10)
    let length = items.length;
     while (length === items.length){
        if (range < items.length) {
            items.splice(range, 1)
            return items;
            }
        }   
    
}