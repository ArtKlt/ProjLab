// Module
const CounterModule = (function() {
    let count = 0;
    return {
        inc() { count++; return count; },
        dec() { count--; return count; }
    };
})();

document.getElementById('module').textContent = 'Module: inc -> ' + CounterModule.inc() + ', dec -> ' + CounterModule.dec();
