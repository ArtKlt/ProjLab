class EventBus {
    constructor() {
        this.listeners = {};
    }

    on(event, fn) {
        if (!this.listeners[event]) this.listeners[event] = [];
        this.listeners[event].push(fn);
    }

    emit(event, data) {
        (this.listeners[event] || []).forEach(fn => fn(data));
    }
}

const bus = new EventBus();
let observerOutput = 'Observer: ';
bus.on('ping', dmg => observerOutput += 'Player took damage: ' + dmg);
bus.emit('ping', 15);

document.getElementById('observer').textContent = observerOutput;
