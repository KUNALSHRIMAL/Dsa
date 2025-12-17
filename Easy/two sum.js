let arr=[0,-1,2,-3,1];
let target=-2;
for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
        if (arr[i]+arr[j] === target) {
            console.log("True")
            console.log(`First number is ${arr[i]} and second number is ${arr[j]}`);
        }
        
    }
    
}