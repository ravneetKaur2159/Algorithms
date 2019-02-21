// Find all prime numbers upto n - Seive of Eratoshtenis
// Time complexity is O(nlog(logn))

var rejectedNumbers = [];
var num = 20;
for(var i=2;i<=Math.sqrt(num);i++){
    var multiple = i*i;
    for(var j=i;j<=num;j++){
        if(j>=multiple && j%i == 0 ){
            rejectedNumbers.push(j);
        }
    }
}

for(var i=1;i<=num;i++){
    if(rejectedNumbers.indexOf(i) == -1){
        console.log(i);
    }
}

