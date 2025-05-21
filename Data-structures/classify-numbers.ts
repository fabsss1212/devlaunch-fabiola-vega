
function numbersPrintIsOddOrEven(): string { //defines function with a string??
    let result: string = " "; //variable is empty + will be filled w contidionasl + the iteration.

    for (let i: number = 0; i <= 10; i++) {
        if (i % 2 === 0) {
            result += `${i} is even\n`;
        } else {
            result += `${i} is odd\n`;
        }
    }

    return result;
}
console.log(numbersPrintIsOddOrEven());
