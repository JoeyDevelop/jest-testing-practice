function analyzeArray(array) {
  const object = {
    average: null,
    min: null,
    max: null,
    length: null,
  }

  // Assign average value
  let count = 0;
  let total = 0;
  array.forEach(element => {
    count++;
    total += element;
  })
  const average = total / count;

  // Assign min value
  let min = array[0];
  array.forEach(element => {
    if(element < min) {
      min = element;
    }
  });

  // Assign max value
  let max = array[0];
  array.forEach(element => {
    if(element > max) {
      max = element;
    }
  });

  object.average = average;
  object.min = min;
  object.max = max;
  object.length = array.length;

  return object
}

export default analyzeArray