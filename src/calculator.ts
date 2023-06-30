
export const add = (num1: number, num2: number): number => {
    return num1 + num2;
}

export const subtract = (num1: number, num2: number): number => {
    return num1 - num2;
}

export const multiply = (num1: number, num2: number): number => {
    return num1 * num2;
}

export const divide = (num1: number, num2: number): number => {
    return num1 / num2;
}

export const evaluate = (num1: number | undefined, num2: number | undefined, operator: string): number => {
    if (num1 === undefined || num2 === undefined) {
        return 0;
    }
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        default:
            return 0;
    }
};