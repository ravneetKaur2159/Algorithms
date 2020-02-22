// Maximum subarray Sum

let maximumSum = null;
const givenArray = [2, 4, 5, 0, -1];

maximumSubarrySum = (arr, startIndex, endIndex, max) => {
    if(startIndex == endIndex){
        return arr[startIndex];
    }
    let element1 = maximumSubarrySum(arr, startIndex, endIndex-1, max);
    let element2 = maximumSubarrySum(arr, startIndex+1, endIndex, max);

    let sumElement = element1 + element2;
    if(max == null || max < sumElement){
        max = sumElement;
    }
}

maximumSubarrySum(givenArray, 0, givenArray.length-1, maximumSum)