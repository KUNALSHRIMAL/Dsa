const arr = [2,2,1,1,1,2,2,1,2,2];
let candidate=arr[0];
let count=1;
for (let i = 1; i < arr.length; i++) {
    if (candidate===arr[i]) {
        count++;
    }
    else{
        count--;
    }
    if (count===0) {
        candidate=arr[i];
        count=1;
    }
}
//Step 2 Verify
count = 0;
for (let num of arr) {
    if (num === candidate) count++;
}

if (count > Math.floor(arr.length / 2)) {
    console.log("Majority Element:", candidate);
} else {
    console.log("No Majority Element");
}