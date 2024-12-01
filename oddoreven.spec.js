const { log } = require("console")

function oddOrEVen(number) {
    if(number%2 == 0) {
        return "Even number is present";
    }
    else{
        return "odd number is present"
    }
}
let output = oddOrEVen(99)
let output1 = oddOrEVen(8)
console.log(output);
console.log(output1);