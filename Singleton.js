// Singleton
const AppConfig = (function() {
    let instance;
    function create() {
        return { name: "MyApp", version: "1.0" };
    }
    return {
        getInstance() {
            if (!instance) {
                instance = create();
            }
            return instance;
        }
    };
})();

document.getElementById('singleton').textContent = 'Singleton: ' + JSON.stringify(AppConfig.getInstance());
