const arr=[12,54,85,5,98,74,32,10];
let small=arr[0];
for (let i = 0; i < arr.length; i++) {
    if(arr[i]<small){
        small=arr[i];
    }
}
console.log(small)