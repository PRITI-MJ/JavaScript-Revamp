

setInterval(() => {
    const div = document.querySelector("div");
    let time = new Date().toLocaleTimeString();
    div.textContent  = time;

}, 1000);
