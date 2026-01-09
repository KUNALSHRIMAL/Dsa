function sort012(arr) {
    // standard sorting function
    arr.sort((a, b) => a - b);
}

// Driver Code
let arr = [0, 1, 2, 0, 1, 2];
sort012(arr);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}