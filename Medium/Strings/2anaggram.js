function areAnagrams(s1, s2) {
    
    if (s1.length !== s2.length) return false;
    
    // Sort both strings
    s1 = s1.split('').sort().join('');
    s2 = s2.split('').sort().join('');
    // Compare sorted strings
    return s1 === s2;
}

// Driver Code
const s1 = "geeks";
const s2 = "kseeg";
if(areAnagrams(s1, s2)){
    console.log("true");
}
else{
    console.log("false");
}