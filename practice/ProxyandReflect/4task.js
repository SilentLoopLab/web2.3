const config = { apiEndpoint: "https://api.example.com", retries: 3 };

const safeConfig = new Proxy(config, {
    deleteProperty(_, prop) {
        console.log(`Warning: Deletion of property ${prop} is forbidden.`);
        return false;
    },
});
safeConfig.retries = 5;
delete safeConfig.apiEndpoint;

console.log(safeConfig.apiEndpoint);

// Expected output:
// "Warning: Deletion of property "apiEndpoint" is forbidden."
// "https://api.example.com"
