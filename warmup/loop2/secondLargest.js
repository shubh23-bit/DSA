function secondLargest(arr) {
    let firstLargest =-Infinity
    let secondLargest1 = -Infinity
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > firstLargest) {
            secondLargest1 = firstLargest
            firstLargest = arr[i];
        }
        else if (arr[i] > secondLargest1) {
            secondLargest1 = arr[i];
        }
    }
    return secondLargest1;
}
let arr = [4, 3, 0, 9, 4, 5, 7];
console.log(secondLargest(arr))
