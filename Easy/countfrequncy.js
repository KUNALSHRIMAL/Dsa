function countCharacterFrequencies(str) {
  const frequencies = new Map();

  // Iterate over the string character by character
  for (const char of str) {
    // Get the current count, or 0 if not present, then increment
    frequencies.set(char, (frequencies.get(char) || 0) + 1);
  } 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
  return frequencies;
}

const inputString = "hello world";
const result = countCharacterFrequencies(inputString);
console.log(result);
// Output: Map(8) { 'h' => 1, 'e' => 1, 'l' => 3, 'o' => 2, ' ' => 1, 'w' => 1, 'r' => 1, 'd' => 1 }


// function countCharacterFrequenciesReduce(str) {
//   // Split the string into an array of characters
//   const frequencies = str.split('').reduce((acc, char) => {
//     // Check if the character key exists in the accumulator (acc)
//     acc[char] = (acc[char] || 0) + 1;
//     return acc;
//   }, {}); // Start with an empty object as the initial accumulator

//   return frequencies;
// }

// const inputStringReduce = "javascript";
// const resultReduce = countCharacterFrequenciesReduce(inputStringReduce);
// console.log(resultReduce);
// // Output: { j: 1, a: 2, v: 1, s: 1, c: 1, r: 1, i: 1, p: 1, t: 1 }
