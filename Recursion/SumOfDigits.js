const num = 1232;
let sumOfDigits = (num, sum) => {
    ans = Math.floor(num/10);
    remainder = num % 10;
    if(ans == 0){
        return sum+num;
    }
    sum = sum + remainder;
    return sumOfDigits(ans, sum);
}

console.log(sumOfDigits(num, 0));