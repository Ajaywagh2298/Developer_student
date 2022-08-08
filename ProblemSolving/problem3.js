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

