// Factory
function AnimalFactory(type) {
    if (type === "cat") return { sound: "meow" };
    if (type === "dog") return { sound: "woof" };
    return { sound: "??? unknown ???" };
}

document.getElementById('factory').textContent = 'Factory: ' + JSON.stringify(AnimalFactory('cat'));
