let arr=[0,-1,2,-3,1,0];
let temarr=[]

for (let i = 0; i < arr.length; i++) {
    if (arr[i] !=0) {
        temarr.push(arr[i])
    }
}
for (let i = 0; i < arr.length; i++) {
    if (arr[i]===0) {
        temarr.push(arr[i])
    }    
}
console.log(temarr)