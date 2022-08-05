/*
* Elements in the Range
BasicAccuracy: 32.68%Submissions: 6679Points: 1
Given an array arr[] containing positive elements. A and B are two numbers defining a range. The task is to check if the array contains all elements in the given range.

Example 1:

Input: N = 7, A = 2, B = 5
arr[] =  {1, 4, 5, 2, 7, 8, 3}
Output: Yes
Explanation: It has elements between
range 2-5 i.e 2,3,4,5
Example 2:

Input: N = 7, A = 2, B = 6
arr[] = {1, 4, 5, 2, 7, 8, 3}
Output: No
Explanation: Array does not contain 6.

Your Task:
This is a function problem. You don't need to take any input, as it is already accomplished by the driver code. You just need to complete the function check_elements() that takes array arr, integer N, integer A, and integer B  as parameters and returns the boolean True if array elements contain all elements in the given range else boolean False.

Note: If the array contains all elements in the given range then driver code outputs Yes otherwise, it outputs No

Expected Time Complexity: O(N).
Expected Auxiliary Space: O(1).


Constraints:
1 ≤ N ≤ 107

 */

//{ Driver Code Starts
//Initial Template for javascript

/*
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });

    main();
});

function readLine() {
    return inputString[currentLine++];
}
*/

function printList(res,n){
    let s="";
    for(let i=0;i<n;i++){
        s+=res[i];
        s+=" ";
    }
    console.log(s);
}


function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        let n = input_ar1[0];
        let A = input_ar1[1];
        let B = input_ar1[2];
        let arr = new Array(n);
        input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++){
            arr[i] = input_ar1[i];
        }
        let obj = new Solution();
        let res = obj.check_elements(arr, n, A, B);
        if(res === true){
            console.log("Yes");
        }
        else{
            console.log("No");
        }

    }
}// } Driver Code Ends



// } Driver Code Ends


//User function Template for javascript


/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} A
 * @param {number} B
 * @returns {boolean}
 */
/*function main(){
    let arr = [4,5,3,9,3,8,6,3,9,3,2];
    let n = 5,A = 4,B= 8;
    let obj = new Solution();
    let res = obj.check_elements(arr, n, A, B);;
    if(res === true){
        console.log("Yes");
    }else {
        console.log("No");
    }
}*/
class Solution{
    check_elements(arr, n, A, B){

        let num = 0;
        if(A>B) return false;

        for(let i=A;i<=B;i++){
            for(let j=0;j<n;j++){
                if(arr[j]==i){
                    num++;
                    break;
                }
            }
        }

        if(num==B-A+1){
            return true;
        }else{
            return false;
        }

    }
}
