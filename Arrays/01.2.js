// Brute force
// Time complexity - O(n)
// Space complexity - O(n)

var givenStr = "abcd\0"

function reverseString(str){
    var newReversedString = [];
    for(var i=str.length-1 ;  i>=0 ; i--){
        newReversedString.push(str[i]);
    }
    return newReversedString;
}
//console.log(reverseString(givenStr).join(""));

//Time Complexity - O(n)
//Space Complexity - O(1)

function reverseString2(string){
    var stringArray = string.split("");
    var temp = "";
    for(var i=0, j=stringArray.length-1 ; i<j ; i++,j--){
        temp = stringArray[i];
        stringArray[i] = stringArray[j];
        stringArray[j] = temp;
    }
    console.log(stringArray.join(""))
}
reverseString2(givenStr);
