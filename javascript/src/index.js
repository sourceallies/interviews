function greet(name) {
    return `Hello, ${name}!`;
}


//Requirements : Take two numberics with a operator as a word between them and calculate the expression
// eg 5 plus 5 outputs 10

function sentencer(expression){
    const operatorMap = {
        "sum" : (x,y) => Number(x) + Number(y),
        "plus" : (x,y) => Number(x) + Number(y),
        "minus" : (x,y) => Number(x) - Number(y),
        "subtract" : (x,y) => Number(x) - Number(y),
        "divide" : (x,y) => Number(x) / Number(y)
    }
    const sanitized = expression.replace(/by/i,'');
    const parts = sanitized.split(/\s+/);

    return operatorMap[parts[1]]?.(parts[0], parts[2]) ?? 'Do it again dummy';
}

module.exports = {
    greet,
    sentencer
};