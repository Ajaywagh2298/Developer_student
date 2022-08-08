// search element in array and return index

function searchInArray(arr, ele) {
    console.log(arr)
    for(let i = 0; i <=arr.length-1; i++){
        console.log(arr[i]+`--->${arr[i+1]}`)
        if(arr[i] == ele){
            console.log(`Searched Conditon is True : ${arr[i]}--->${ele}`);
            return i;
        }
    }
    return -1;

}

function searchWithrecursiveFunction(arr, ele, start, end) {
    const mid = Math.floor((start + end) / 2);
    console.log(`Middle = ${mid}, Start = ${start}, End = ${end}`);
    if (start > end) return false;
    if (arr[mid]===ele) return mid;
    if(arr[mid] > ele)
        return searchWithrecursiveFunction(arr, ele, start, mid-1);
    else
        return searchWithrecursiveFunction(arr, ele, mid+1, end);
}

function dataIndex(){
    let arr = [1,2,3,4,5,6,7,8,9];
    const n = 8;
    const len = arr.length-1;
    const search = searchInArray(arr, n);
    const searchValue = searchWithrecursiveFunction(arr, n,0,len)

    console.log(`Array Index: ${search} for ${n} using 'searchValue()'`);;
    console.log(`Array Index: ${searchValue} for ${n} using 'searchWithrecursiveFunction()'`);
}

dataIndex();


/*
Output of the Solutions are
PS D:\Developer_student\ProblemSolving> node problem2.js
[
  1, 2, 3, 4, 5,
  6, 7, 8, 9
]
1--->2
2--->3
3--->4
4--->5
5--->6
6--->7
7--->8
8--->9
Searched Conditon is True : 8--->8
Middle = 4, Start = 0, End = 8
Middle = 6, Start = 5, End = 8
Middle = 7, Start = 7, End = 8
Array Index: 7 for 8 using 'searchValue()'
Array Index: 7 for 8 using 'searchWithrecursiveFunction()'
PS D:\Developer_student\ProblemSolving>

*/

/**
 * Index of first Occurrence in Sorted Array
 * */
//----------- SIMPLE SOLUTON --------
function firstOccurrence(arr,x){
    const len = arr.length;

    for(let i = 0; i < len -1; i++){
        if(arr[i] === x){
            return i;
        }
    }
    return -1;
}
console.log(' firstOccurrence ' + firstOccurrence([5,10,10,15,15,20],15));

/**
 * Index of last Occurrence in Sorted Array
 * */
//----------- SIMPLE SOLUTON --------

function lastOccurrence(arr, n, x)
{
    let low = 0, high = n - 1;
    while(low <= high)
    {
        const mid = (low + high) / 2;
        if(x > arr[mid])
            low = mid + 1;
        else if(x < arr[mid])
            high = mid - 1;
        else
        {
            if(mid == n - 1 || arr[mid + 1] != arr[mid])
                return mid;
            else
                low = mid + 1;
        }
    }
    return -1;
}
let arr = [5,10,10,10,10,20,20];
const n = 10;
const len = arr.length;
console.log(' lastOccurrence ' + lastOccurrence(arr, len,n));

/**
 * Count Occurrence in Sorted Array
 * */
//----------- SIMPLE SOLUTON --------
function countOccurrences(arr, ele){
    let count = 0;
    for(let i = 0; i <=arr.length-1; i++){
        if(arr[i] == ele){
            count++;
        }
    }
    if(count == 0)
        return 'Undefined';
    else
        return count;
}
let arr1 = [5,10,10,10,10,20,20];
console.log(' countOccurrences '+countOccurrences(arr1,10))

/**
 * Count 1's in a sorted Arrays
 * */

function oneOccurrence(arr){
    let start = 0, end = arr.length - 1;
    const len = arr.length;
    while(start <= end){
        let mid = Math.trunc((start + end) / 2);
        if(arr[mid]==0)
            start = mid + 1;
        else{
            if(mid == 0 || arr[mid - 1] == 0)
                return ( len - mid );
            else
                end = mid - 1;
        }
    }
    return 0;
}

let arrOne = [0,0,0,0,0,1,1,1,1,1,1,1,1,1];
console.log(' oneOccurrence '+oneOccurrence(arrOne))
