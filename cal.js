function cal(val1, val2, type) {
    switch (type) {
        case type = "div":
            return val1 / val2;
        case type = "mul":
            return val1 * val2;
        case type = "sum":
            return val1 + val2;
        case type = "sub":
            return val1 - val2;
        default:
            throw new Error("Invalid operation type");
    }
}
var sums = cal(1, 20, "sub");
console.log(sums);
