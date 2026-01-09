let arr = [1, 4, 45, 6, 10, 8];
let target = 13;
let n=arr.length;
// O(n^3)
// for (let i = 0; i < n-2; i++) {
//      for (let j = i+1; j < n-1 ; j++) {
//         for (let k = j+1; k < n; k++) {
//            if (arr[i]+arr[j]+arr[k]==target) {
//                 console.log(arr[i],arr[j],arr[k])
//            }   
//         }
//      }
// }

//O(n^2)
function sethash(arr,target,n) {
   for(let i=0;i<n-2;i++){
      let st=new Set();
      for (let j = i+1; j < n; j++) {
         let second=target -arr[i]-arr[j];

         if(st.has(second)){
            console.log(arr[i],arr[j],second)
            return true;

         }
         st.add(arr[j]);
      }
   }
   return false;
}
if(sethash(arr,target,n))
   console.log("yes")
else
   console.log("No")