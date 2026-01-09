function longestCommonPrefix(arr) {
    arr.sort();
    let first =arr[0];
    let last=arr[arr.length  -1];
    let minlength=Math.min(first.length,last.length);

    let i=0;
    while(i<minlength && first[i] === last[i]){
        i++
    }

    return first.substring(0,i);
    
}



// Driver Code
let arr = ["geeksforgeeks", "geeks", "geek", "geezer"];
console.log(longestCommonPrefix(arr) );