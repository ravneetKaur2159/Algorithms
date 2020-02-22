const n =12;
const a=3, b=5, c=11, d=4;
const price = {
    "a" : 3,
    "b" : 5,
    "c" : 11,
    "d" : 4
};

let rodCutting = (remainingLength, lengthSoFar) => {
    if(remainingLength == 0 ){
        return lengthSoFar + 1;
    }

    if(remainingLength<0 ){
        return lengthSoFar + 0;
    }

    return Math.max(rodCutting(remainingLength-a, lengthSoFar+1),
            rodCutting(remainingLength-b, lengthSoFar+1),
            rodCutting(remainingLength-c, lengthSoFar+1),
            rodCutting(remainingLength-d, lengthSoFar+1));
};

// console.log(rodCutting(n,-1));

let rodCuttingPrice = (totalLength, priceSoFar, cutId) => {
    if(totalLength == 0){
        return priceSoFar;
    }
    if(totalLength < 0){
        return priceSoFar-price[cutId];
    }
    return Math.max(rodCuttingPrice(totalLength-a, priceSoFar+price.a, "a"),
                    rodCuttingPrice(totalLength-b, priceSoFar+price.b, "b"),
                    rodCuttingPrice(totalLength-c, priceSoFar+price.c, "c"),
                    rodCuttingPrice(totalLength-d, priceSoFar+price.d, "d"));

}

console.log(rodCuttingPrice(n, 0, null));