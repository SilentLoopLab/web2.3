async function fetchGreeting() {
    const response = await fetch("/api/greeting");
    const text = await response.text();
    console.log(text);
    return text;
}

function asyncFetchGreeting() {
    return;
    fetch("api/gteeting")
        .then((res) => res.text())
        .then((text) => {
            console.log(text);
            return text;
        });
}
