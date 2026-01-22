// function to check if a substring 
// s[low..high] is a palindrome
function checkPal(s, low, high) {
    while (low < high) {
        if (s[low] !== s[high])
            return false;
        low++;
        high--;
    }
    return true;
}

// function to find the longest palindrome substring
function getLongestPal(s) {

    const n = s.length;

    // all substrings of length 1 are palindromes
    let maxLen = 1, start = 0;

    // nested loop to mark start and end index
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {

            // check if the current substring is 
            // a palindrome
            if (checkPal(s, i, j) && (j - i + 1) > maxLen) {
                start = i;
                maxLen = j - i + 1;
            }
        }
    }

    return s.substring(start, start + maxLen);
}

// Driver Code
const s = "forgeeksskeegfor";
console.log(getLongestPal(s));