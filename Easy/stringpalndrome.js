function ispal(str) {
    // let rev="";
    // for(let i=str.length -1;i>=0;i--){
    //     rev+=str[i];
    // }
    let rev=str.split("").reverse().join(""); 
    console.log(`The revers of ${str} is ${rev}`)
    if (rev== str) {
        return true;
    }
    else{
        return false;
    }
}
console.log(ispal("racecar"));