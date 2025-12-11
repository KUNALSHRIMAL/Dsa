const arr=[12,54,85,98,74,32,10];
let largest=arr[0];
for (let i = 0; i < arr.length; i++) {
    if (arr[i]>largest) {
        largest=arr[i];
    }

}
console.log(largest);