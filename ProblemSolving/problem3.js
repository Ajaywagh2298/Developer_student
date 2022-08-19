/**
 * Given an integer x, return true if x is palindrome integer.

 An integer is a palindrome when it reads the same backward as forward.

 For example, 121 is a palindrome while 123 is not.


 Example 1:

 Input: x = 121
 Output: true
 Explanation: 121 reads as 121 from left to right and from right to left.
 Example 2:

 Input: x = -121
 Output: false
 Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
 Example 3:

 Input: x = 10
 Output: false
 Explanation: Reads 01 from right to left. Therefore it is not a palindrome.


 Constraints:

 -231 <= x <= 231 - 1
 */

/**
 * @param {number} x
 * @return {boolean}
 */
function isPalindrome(x) {
    if (x < 0) return false;
    if (x < 10) return true;
    if (x % 10 === 0) return false;

    let rev = 0;
    while (rev < x) {
        rev *= 10;
        rev += x%10;
        x = Math.trunc(x/10);
    }

    return rev === x || Math.trunc(rev/10) === x;
};
console.log(' isPalindrome '  )
const num = 121;
if(isPalindrome(num)=== true){
    console.log(`Given ${num} are Palindrome`)
}else{
    console.log(`Given ${num} are not Palindrome`)
}
//----------------------------------------------- END ------------------------------------------------------------------

/**
 * Roman to Integer
 Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

 Symbol       Value
 I             1
 V             5
 X             10
 L             50
 C             100
 D             500
 M             1000
 For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

 Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

 I can be placed before V (5) and X (10) to make 4 and 9.
 X can be placed before L (50) and C (100) to make 40 and 90.
 C can be placed before D (500) and M (1000) to make 400 and 900.
 Given a roman numeral, convert it to an integer.



 Example 1:

 Input: s = "III"
 Output: 3
 Explanation: III = 3.
 Example 2:

 Input: s = "LVIII"
 Output: 58
 Explanation: L = 50, V= 5, III = 3.
 Example 3:

 Input: s = "MCMXCIV"
 Output: 1994
 Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.


 Constraints:

 1 <= s.length <= 15
 s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
 It is guaranteed that s is a valid roman numeral in the range [1, 3999].*/

/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function(s) {
    if (!s || s.length === 0) {
        return 0;
    }

    const map = new Map([['I', 1], ['V', 5], ['X', 10], ['L', 50], ['C', 100], ['D', 500], ['M', 1000]]);

    let i = s.length - 1;
    let result = map.get(s[i]);

    while (i > 0) {
        const curr = map.get(s[i]);
        const prev = map.get(s[i - 1]);

        if (prev >= curr) {
            result += prev;
        } else {
            result -= prev;
        }

        i--;
    }

    return result;

};

console.log(' romanToInt ' + romanToInt('IV'));
//-------------------------------------------------- END ---------------------------------------------------------------

/**
 * Longest Common Prefix

 Write a function to find the longest common prefix string amongst an array of strings.

 If there is no common prefix, return an empty string "".

 Example 1:

 Input: strs = ["flower","flow","flight"]
 Output: "fl"
 Example 2:

 Input: strs = ["dog","racecar","car"]
 Output: ""
 Explanation: There is no common prefix among the input strings.


 Constraints:

 1 <= strs.length <= 200
 0 <= strs[i].length <= 200
 strs[i] consists of only lowercase English letters.
 */
/*Approach
First find the shortest string in the array; the length of this string is the maximum length of our prefix
this is because a prefix can't be longer than the word it inhabits
Next we iterate from index 0 to maxPrefixLength - 1
We use this index to check the corresponding character of each string together and compare them
This is easily done using Array.every
If all characters at index i match, then we add it to our prefix result string
As soon as we hit one mismatch, that's the end of the common prefix and we break out of our loop
return prefix at the end, which may be empty
Solution*/

var longestCommonPrefix = function(strs) {
    if (!strs.length) return '';
    let prefix = '';
    let maxPrefixLength = Math.min(...strs.map(str => str.length));
    for (let i = 0; i < maxPrefixLength; i++) {
        let char = strs[0][i];
        if (strs.every(str => str[i] === char)) {
            prefix += char;
        } else {
            break;
        }
    };

    if(prefix == 0) console.log(`" "`)
    else return console.log(prefix);
};
console.log(' firstOccurrence ' )
longestCommonPrefix(['ajay','aj6au','ajaa']);
console.log(' firstOccurrence ' )
longestCommonPrefix(['-ajay','=aj6au','pa6jaa']);
//----------------------------------------- END ------------------------------------------------------------------------

/**
 * Josephus problem
 Given the total number of persons n and a number k which indicates that k-1 persons are skipped and kth person is killed in circle in a fixed direction.

 The task is to choose the safe place in the circle so that when you perform these operations starting from 1st place in the circle, you are the last one remaining and survive.

 Example 1:

 Input:
 n = 3 k = 2
 Output: 3
 Explanation: There are 3 persons so
 skipping 1 person i.e 1st person 2nd
 person will be killed. Thus the safe
 position is 3.

 Example 2:

 Input:
 n = 5 k = 3
 Output: 4
 Explanation: There are 5 persons so
 skipping 2 person i.e 3rd person will
 be killed. Thus the safe position is 4.


 Your Task:
 You don't need to read input or print anything. You are required to complete the function josephus () that takes two parameters n and k and returns an integer denoting safe position.

 Expected Time Complexity: O(N).
 Expected Auxiliary Space: O(N).

 Constraints:
 1 <= k, n <= 20
 * */

/**
 * @param {number} n
 * @param {number} k
 * @returns {number}
 */

 function josephus(n, k) {
        let result = 0;
        for(let i=1;i<=n;i++)
            result = (result + k)%i;
        return result + 1;
}

console.log(' josephus: '+ josephus(7,4))

/**
 * Remove Duplicates from Sorted Array
 * Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

 Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

 Return k after placing the final result in the first k slots of nums.

 Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

 Custom Judge:

 The judge will test your solution with the following code:

 int[] nums = [...]; // Input array
 int[] expectedNums = [...]; // The expected answer with correct length

 int k = removeDuplicates(nums); // Calls your implementation

 assert k == expectedNums.length;
 for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}
 If all assertions pass, then your solution will be accepted.



 Example 1:

 Input: nums = [1,1,2]
 Output: 2, nums = [1,2,_]
 Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
 It does not matter what you leave beyond the returned k (hence they are underscores).
 Example 2:

 Input: nums = [0,0,1,1,1,2,2,3,3,4]
 Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
 Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
 It does not matter what you leave beyond the returned k (hence they are underscores).
 * */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const len = nums.length;
    let n = 0;
    if(len==0 || len ==1) return len;

    for(let i = 0 ;i < len -1 ; i++){
        if(nums[i]!==nums[i+1]){
            console.log(` loop Data :${nums[n++] = nums[i]}`);
        }
    }
    console.log(`Ans match : ${nums[n++] = nums[len -1]}`)
    return n;
};

console.log(' Solution : ' + removeDuplicates([0,0,1,1,1,2,2,3,3,4]))

/**
 * Jerome and his friend Martin have developed a special app for sending messages. The app has a special feature of encryption. So, whenever Jerome wants to send the message to Martin an encrypted message, they must need the public and private keys. To get the public and private key they have decided to choose three integers P, R, and a secret code X, and use the following rules to generate both the keys

 The rules are:

 The public key will be the smallest integer N for which PS NSR and the sum of its digits is X.

 The private key will be the largest integer M for which PSMSR and the sum of its digits is X. Jerome and Martin will be able to send and receive the encrypted messages successfully only if correctly determines numbers i.e., public key N and private key M remembering that the N and M will always exist. Can you help Jerome and his friend Martin with a program to generate the public and private keys by accepting P, R, and X. Read the input from STDIN and print the output to STDOUT. Do not write arbitrary strings while reading the input or while printing, as these contribute to the standard output.

 Constraints:

 1.P(1≤P≤10000) ii. R (1 ≤ R≤ 10 000, P ≤R) iii. X (1 ≤ X ≤36)

 Input Format:

 The first line of input contains the integer P. The second line of input contains the integer R. The third line of input contains the integer X, the secret code of the app.

 Output Format:

 The first line of output must contain the integer public key, N. The second line of output must contain the integer private key, M.

 Sample Input 1:

 1

 55

 5

 Sample Output 1:
 5
 50

 explaination : if list last with 1 t0 55
                 the public key start with 5 like Pub = { 5, 14, 23, 32, 41}
 * */

function keyCounter(start , end, pub){
    let arr ={};
    let count = 0;
    for(let i = start; i <= end; i++){
        if(i<=pub){
            arr[i+9];
            count++;
        }
    }
    console.log("public key   :  " + count)
    console.log(`private key  :  ${end-count}`)
}

keyCounter(1,55,5)
keyCounter(9,99,18)