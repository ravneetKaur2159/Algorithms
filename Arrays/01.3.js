// Maximum sum such that no two elements are adjacent

var givenArray = [5,5,10,-100,10,5];
var path1 = 0;
var path2 = 1;
var maximumPath1 = 0;
var maximumEndPath1 = 0;
var maximumPath2 = 0;
var maximumEndPath2 = 0;

for(;path2 <givenArray.length;){
    var path1Value = maximumEndPath1 + givenArray[path1];
    var path2Value = maximumEndPath2 + givenArray[path2];
    maximumEndPath1 = path1Value > maximumEndPath1 ? path1Value : maximumEndPath1;
    maximumEndPath2 = path2Value > maximumEndPath2 ? path2Value : maximumEndPath2;

    if(maximumPath1<maximumEndPath1){
        maximumPath1 = maximumEndPath1;
    }

    if(maximumPath2 < maximumEndPath2){
        maximumPath2 = maximumEndPath2;
    }
    path1 = path1+2;
    path2 = path2+2;
}

if(maximumPath1>maximumPath2){
    console.log(maximumEndPath1);
}else{
    console.log(maximumPath2);
}