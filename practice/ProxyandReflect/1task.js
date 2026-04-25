class DataStore {
  username = "admin";
}

const store = new DataStore();
const proxyStore = new Proxy(store, {
    get(target, prop) {
        console.log(`Reading property: ${prop}`);
        return Reflect.get(target, prop);
    },
    set(target, prop, newValue) {
        console.log(`Writing property: ${prop} = ${newValue}`);
        return Reflect.set(target, prop, newValue);
    }
});

console.log(proxyStore.username);
proxyStore.theme = "dark";

// Expected output:
// "Reading property: username"
// "admin"
// "Writing property: theme = dark"