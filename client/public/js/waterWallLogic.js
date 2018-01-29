// //waterWalls = (wallHeights) => {
// }

// calculateWater = (array, start, end) => {
// }

// findMaxHeight = (array, index) => {
// }

// Input:
// array of numbers
// [5, 3, 7, 2, 6, 4, 5, 9, 1, 2]
// [5, 4, 7, 1, 3, 6]

// Output:
// [3, 8, 11]
// [3, 6, 8]

// Transformation =
// output = [1,1,0] => [1,3,2] => [3, 8, 11]
// output = [1,1,0] => [1,3,1] => [3, 6, 8]

// Constraints:
// Both space and time big-O's are polynomial, as a for loop is used on every index, and slice()

// waterWalls = (wallHeights) => {
  // if wallHeights length is less than 3, no puddles, return [1,1,0].
  // set max Water to [1,1,0].

  //iterate through wallheights
    // Find max height that is closest to end of array, with index value greater than current index.
    // do the above by findMaxHeight(sliced array, index+1 to resemble number of values removed)

    // use calculateWater(array, start, end) to find water deposit amount.
    // if water deposit amount is greater than max water[2],
    //   maxWater = [start+1, end+1, water deposit]
  // return maxWater
//}

// findMaxHeight = (array, index) => {
  // use reduce to find max height and index
    // memo initial number is [array[0], 0];
    // if current height is greater or equal, change the height and index number of memo,

  // add index adjustment to index value of memo
  // return memo
// }

// calculateWater = (array, start, end) => {
  // declare variable store to 0
  // find the lesser of start and end index on array, name it base.
  // iterate between start and end of array
    // if difference between base and current index is greater than, add to store
  // return store
// }


// How? Compare index 2 of biggest Puddle with current puddle index amount.
// if latter is greater, then replace.

// puddle amount calculated by finding the index that is greater than current index,
// and also the highest.
// calculate the height difference between current height and iterating height to find water height.


//repeat until there are no longer towers that are greater or equal to current
// index value's height.


const waterWalls = (wallHeights) => {

 if (wallHeights.length < 3 || !Array.isArray(wallHeights)) {
  return [1,1,0];
 }

  let maxWater = [1,1,0];

  for (let i = 0; i < wallHeights.length - 1; i++) {
    let maxHeight = findMaxHeight(wallHeights.slice(i+1), i+1);

    let waterAmount = calculateWater(wallHeights, i, maxHeight[1]);

    if (waterAmount > maxWater[2]) {
      maxWater = [i+1, maxHeight[1]+1, waterAmount];
    }

  }
  return maxWater;
}

const findMaxHeight = (array, index) => {
  if (!Array.isArray(array)) {
    return null;
  }

  let max = array.reduce((maximum, num, ind) => {
    if (num >= maximum[0]) {
      maximum[0] = num;
      maximum[1] = ind;
    }
    return maximum;
  }, [array[0], 0]);

  max[1] += index || 0;

  return max;
}

const calculateWater = (array, start, end) => {

  let store = 0;
  const base = Math.min(array[start], array[end]);

  for (let i = start; i < end; i++) {
    const diff = base - array[i];

    if (diff > 0) {
      store += diff;
    }
  }
  return store;
}

module.exports = { waterWalls, findMaxHeight, calculateWater}