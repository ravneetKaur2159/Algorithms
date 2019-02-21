// Brute-force approach O(n^2)

var str = "qqabcdefghi98";
function uniqueCharOfAString(string){
    for(var i=0; i<string.length;i++){
        for(var j=i+1; j<string.length;j++){
            if(string[i] == string[j]){
                console.log("All characters are not unique.\nDuplication exists at index : "+i);
                return;
            }
        }
    }
    console.log("All characters are unique");
}
//uniqueCharOfAString(str);

// Using sorting (sorting them according to their ascii values) : O(nlogn)
// Space complexity = O(n)
function uniqueCharAsciiSort(str){
    var stringToAsciiArr = [];
    for(var i=0;i<str.length;i++){
        stringToAsciiArr.push(str.charCodeAt(i));
    }
    stringToAsciiArr = stringToAsciiArr.sort(sortNumbers);
    for(var i=0;i<stringToAsciiArr.length;i++){
        if(stringToAsciiArr[i+1] && stringToAsciiArr[i] == stringToAsciiArr[i+1]){
            console.log("All characters are not unique.\nDuplication exists at index : "+i);
            return;
        }
    }
    console.log("All characters are unique");
}
uniqueCharAsciiSort(str);
    

function sortNumbers(a,b){
    return a-b;
}

// Using ASCII characters array (O(n))
// Space complexity : O(n)
function uniqueCharAscii(string){
    var asciiArray = new Array(256);
    for(var i=0;i<string.length;i++){
        var asciiEncoding = string.charCodeAt(i);
        if(asciiArray[asciiEncoding]){
            console.log("All characters are not unique.\nDuplication exists");
            return;
        }
        asciiArray[asciiEncoding] = true;
    }
    console.log("All characters are unique");
}
//uniqueCharAscii(str);

// Using ASCII characters array - Time complexity O(n)
//Space complexity : O(1)
// can be done through bit-wise operators