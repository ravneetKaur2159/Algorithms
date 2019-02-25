// Longest Increasing Subsequence

// Brute Force Methodology
// Time Complexity : O(n^2)
// Space Complexity : O(n)

var givenArray = [10,22,9,33,21,50,41,60,80];
function longSubSeqBruteForce(){
    var counter = 0;
    var elementChain = [];
    var cacheCounter = 0;
    var cacheElementChain = [];
    for(var i =0;i<givenArray.length;i++){
        if(cacheCounter<counter){
            cacheCounter = counter;
            cacheElementChain = elementChain;
        }
        counter = 1;
        elementChain = [];
        elementChain.push(givenArray[i]);
        for(var j=i;j<givenArray.length;j++){
            if(givenArray[j]<givenArray[j+1]){
                counter++;
                elementChain.push(givenArray[j+1]);
            }
        }
    }
    console.log(cacheCounter);
    console.log(cacheElementChain);
}
    
//longSubSeqBruteForce();


// LIS using tabulation 
// Time Complexity - O(n^2)
// Space Complexity - O(n)
var pathArray = [];
pathArray[0] = 0;
function longSubSequenceTab(){
    for(var i=0;i<givenArray.length;i++){
        for(var j=0;j<=i;j++){

            if(givenArray[j]<givenArray[i]){
                var value = pathArray[j]+1;
                if(pathArray[i]){
                    if(pathArray[i]<value){
                        pathArray[i] = value;
                    }
                }else{
                    pathArray[i] = value;
                }
            } else if(givenArray[j]>givenArray[i]){
                if(pathArray[i] || pathArray[i] < 0){
                }else{
                    pathArray[i] = 0;
                }
                
            } else{
                pathArray[i] = pathArray[j];
            }
        }
    }
    console.log(pathArray[pathArray.length-1]+1);
}

longSubSequenceTab();