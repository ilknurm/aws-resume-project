const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch(
        "https://fbkvezes6ugv4gxty3lyqzocky0qbsgd.lambda-url.us-east-1.on.aws/"
    );
    let data = await response.json();
    counter.innerHTML = `Views: ${data}`;
}
updateCounter();