var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

chocolateBars.push('smarties');
console.log(chocolateBars);

// var cities = ['Boston', 'New York', 'Philly', 'Frisco'];
// cities.unshift('Oakland');

// [...cities];

// const cats = ['Garfield', 'Milo'];
// const moreCats = ['Felix',...cats];
// console.log(moreCats);

function addElementToBeginningOfArray(array, element) {
  let updatedArray = [];
  updatedArray = [element,...array];
  return updatedArray;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  let newArray = array.unshift(element);
  return newArray;
}
