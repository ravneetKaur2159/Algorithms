/*
    Given input string = "AABAABBBA"
    Pattern string = "AAB"
    We implement a naive algorithm. The best case time complexity is O(n). The worst case is O(mn)
*/

var givenString = "AABAABBA";
var pattern = "AAB"
var matchFound = false;
//iterative approach
for(var i = 0; i<givenString.length ; i++){
    if(givenString[i] == pattern[0]){
        for(var j=i+1,k=1;k<pattern.length;j++,k++){
            matchFound = true;
            if(givenString[j] != pattern[k]){
                matchFound = false;
                break;
            }
        }
        if(matchFound){
            console.log("Pattern found at : "+ i + "\n");
        }
        
    }
}
