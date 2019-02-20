var arrayOne = [1,4,6,7,9];
var arrayTwo = [1,3,5,6,8,9,10];
var mergedArray = [];

/* iterative approach - brute force
 * time-complexity : O(m+n)
 * space-complexity : O(m+n)
 */

for(var i=0, j=0; i < (arrayOne.length) || j < (arrayTwo.length);){

    if(arrayOne[i] && arrayTwo[j]){
        if(arrayOne[i] < arrayTwo[j]){
            mergedArray.push(arrayOne[i]);
            i++;
        }else if(arrayOne[i] == arrayTwo[j]){
            mergedArray.push(arrayOne[i]);
            i++;
            j++;
        }else{
            mergedArray.push(arrayTwo[j]);
            j++;
        }
    }else if(arrayOne[i]){
        mergedArray.push(arrayOne[i]);
        i++;
    }else if(arrayTwo[j]){
        mergedArray.push(arrayTwo[j]);
        j++;
    }
}

/* iterative approach II
 * time-complexity : O(mn)
 * space-complexity : O(1)
 */

for(var i=0,j=0;i<arrayOne.length || j<arrayTwo.length;){
    if(arrayOne[i] && arrayTwo[j]){
        if(arrayOne[i]<arrayTwo[j]){
            i++;
        }else if(arrayOne[i] == arrayTwo[j]){
            i++;
            j++;
        }else{
            arrayOne.splice(i,0,arrayTwo[j]);
            arrayTwo.splice(j,1);
            i++;
            j++;
        }
    } else if(arrayTwo[j]){
        arrayOne.splice(i,0,arrayTwo[j]);
        arrayTwo.splice(j,1);
        i++;
        j++;
    }
}

