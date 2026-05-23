function getSettings() {
    fetch("/api/settings")
        .then((res) => res.json())
        .catch((error) => console.log("An error occurred:", error));
}

async function asyncGetSettings() {
    try {
        const res = await fetch("/api/settings");
        await res.json();
    } catch (err) {
        console.log("An error occurred:", err.message);
    }
}

asyncGetSettings();
