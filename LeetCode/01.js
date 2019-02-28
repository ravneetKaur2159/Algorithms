// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.

var givenArray = [2,7,1,8];
var sum = 8;

// Brute Force - O(n^2)
function sumTwoNumbers(){
    for(var i=0;i<givenArray.length; i++){
        for(var j=1;j<givenArray.length;j++){
            if(i==j){
                break;
            }
            var value = givenArray[i]+givenArray[j];
            if(sum == value){
                console.log("The two indices are : "+i+" and "+j);
                return;
            }
        }
    }
    console.log("There are no two indices that add up to the given sum");
}
sumTwoNumbers();


