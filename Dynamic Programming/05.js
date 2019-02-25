// Kandane's Algorithm - O(n) - Doesn't work if all numbers are negative
var givenArray = [-2, -3, 4, -1, -2, 1, 5, -3];

function largestSumSubseq(){
    var maximumSoFar = 0;
    var maximumEndingHere = 0;
    var startIndex = 0;
    var endIndex = 0;
    for(var i=0;i<givenArray.length;i++){
        if(0<maximumEndingHere+givenArray[i]){
            maximumEndingHere = maximumEndingHere+givenArray[i];
            s = i;
        }
        if(maximumSoFar<maximumEndingHere){
            maximumSoFar = maximumEndingHere;
            endIndex = i;
        }
    }
    console.log(maximumSoFar);
    console.log(startIndex);
    console.log(endIndex);
}

//largestSumSubseq();

// Find largest subsequence recursively
function largestSubseqRecursively(startIndex, endIndex, arrayLengthStart, arrayLengthEnd){
    if(startIndex == endIndex){
        return givenArray[startIndex];
    }

    // Finding largest Contiguous sum
    if(typeof arrayLengthStart != "undefined" && typeof arrayLengthEnd != "undefined"){
        // Finding sum for middle element
        sum = givenArray[startIndex] + givenArray[endIndex];
        for(var i=startIndex-1, j=endIndex+1;i>=arrayLengthStart || j<=arrayLengthEnd;i--, j++){
            if(givenArray[i] && sum<sum+givenArray[i]){
                sum = sum+givenArray[i];
            }
            if(givenArray[j] && sum<sum+givenArray[j]){
                sum = sum+givenArray[j];
            }
        }
        return sum;
    }

    // Finding largest Sum Second Half
    
    // Middle Element
    var middleElementIndex = Math.floor((endIndex+startIndex)/2);

    return Math.max(largestSubseqRecursively(startIndex,middleElementIndex), 
        largestSubseqRecursively(middleElementIndex+1,endIndex), 
        largestSubseqRecursively(middleElementIndex,middleElementIndex+1,startIndex, endIndex));
    
}

console.log("Largest Sum : "+largestSubseqRecursively(0, givenArray.length-1));