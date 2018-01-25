// Input:
// array of numbers
// [5, 3, 7, 2, 6, 4, 5, 9, 1, 2]
// [5, 4, 7, 1, 3, 6]

// Output:
// [3, 8, 11]
// [3, 6, 8]

// Transformation =
// output = [1,1,0] => [1,3,2] => [3, 8, 11]

// Constraints:
// Both space and time big-O's are polynomial, as a for loop is used on every index, and slice()
// How? Compare index 2 of biggest Puddle with current puddle index amount.
// if latter is greater, then replace.

// puddle amount calculated by finding the index that is greater than current index,
// and also the highest.
// calculate the height difference between current height and iterating height to find water height.


//repeat until there are no longer towers that are greater or equal to current
// index value's height.


const waterWalls = (wallHeights) => {

 if (wallHeights.length < 3) {
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

const findMaxHeight = (array, index) => {

  const max = Math.max.apply(null, array);
  const ind = array.length - array.reverse().indexOf(max) - 1;

  return [max, ind + index];
}

console.log(waterWalls([5, 3, 7, 2, 6, 4, 5, 9, 1, 2]))