// #### Add two number
function addTwoNumbers(numA, numB) {
  return numA + numB;
}

let result, expected;

function test(message, callback) {
  try {
    callback();
    console.log(`✅`, message);
  } catch (error) {
    console.error(error);
    console.log(`❌`, message);
  }
}

function testAddTwoNumbers() {
  result = addTwoNumbers(2, 4);
  expected = 6;
  if (result !== expected) {
    throw new Error(`${result} is not equal to ${expected}`);
  }
}

test(`adding 2 and 4`, testAddTwoNumbers);

function testAddTwoNumbers() {
  result = addTwoNumbers(2, 2);
  expected = 3;
  if (result !== expected) {
    throw new Error(`${result} is not equal to ${expected}`);
  }
}
test(`adding 2 and 2`, testAddTwoNumbers);

function testAddTwoNumbers() {
  result = addTwoNumbers(3, 3);
  expected = 5;
  if (result !== expected) {
    throw new Error(`${result} is not equal to ${expected}`);
  }
}

test(`adding 3 and 3`, testAddTwoNumbers);

function testAddTwoNumbers() {
  result = addTwoNumbers(1, 1);
  expected = 3;
  if (result !== expected) {
    throw new Error(`${result} is not equal to ${expected}`);
  }
}
test(`adding 1 and 1`, testAddTwoNumbers);

function testAddTwoNumbers() {
  result = addTwoNumbers(2, 1);
  expected = 3;
  if (result !== expected) {
    throw new Error(`${result} is not equal to ${expected}`);
  }
}
test(`adding 2 and 1`, testAddTwoNumbers);
