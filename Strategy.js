// Strategy
const strategies = {
    add(a, b) { return a + b; },
    mul(a, b) { return a * b; }
};

function runStrategy(name, a, b) {
    return strategies[name](a, b);
}

document.getElementById('strategy').textContent = 'Strategy (add): ' + runStrategy('add', 2, 3);
