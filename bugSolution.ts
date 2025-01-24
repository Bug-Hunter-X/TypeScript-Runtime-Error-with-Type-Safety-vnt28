function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: any, b: any): number {
  const numA = typeof a === 'number' ? a : parseFloat(a);
  const numB = typeof b === 'number' ? b : parseFloat(b);
  if (isNaN(numA) || isNaN(numB)) {
    throw new Error('Invalid input: Both arguments must be numbers or convertible to numbers.');
  }
  return numA + numB;
}

const result1 = addSafe(10, 20); // 30
const result2 = addSafe("10", "20"); // 30
const result3 = addSafe("hello", "world"); // Throws an error

console.log(result1, result2); // 30 30

try {
  console.log(result3); 
} catch (error) {
  console.error(error); // Error: Invalid input: Both arguments must be numbers or convertible to numbers.
}
