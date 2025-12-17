const arr=[8,2,5,6,1,4,7]
const n=arr.length +1;
for (let i = 1; i <= n; i++) {
    let found=false;
    for (let j = 0; j < n-1; j++) {
        if(arr[j]==i){
            found = true;
            break;
        }
    }
    if (!found) {
        console.log(i);
    }

}   
console.log(n)