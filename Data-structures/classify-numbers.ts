
function numbersPrint(): string {
    let result: string = "";

    for (let i: number = 1; i <= 10; i++) {
        if (i % 2 === 0) {
            result += `${i} is even\n`;
        } else {
            result += `${i} is odd\n`;
        }
    }

    return result;
}

console.log(numbersPrint());
