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
function recursiveFunction(arr, ele, start, end) {
    const mid = Math.floor((start + end) / 2);
    console.log(`Middle = ${mid}, Start = ${start}, End = ${end}`);
    if (start > end) return false;
    if (arr[mid]===ele) return mid;
    if(arr[mid] > ele)
        return recursiveFunction(arr, ele, start, mid-1);
    else
        return recursiveFunction(arr, ele, mid+1, end);
}

function dataIndex(){
    let arr = [1,2,3,4,5,6,7,8,9];
    const n = 8;
    const len = arr.length-1;
    const search = searchInArray(arr, n);
    const searchValue = recursiveFunction(arr, n,0,len)

    console.log(`Array Index: ${search} for ${n}`);
    console.log(`Array Index: ${searchValue} for ${n}`);
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
Array Index: 7 for 8
    Array Index: 7 for 8
*/

