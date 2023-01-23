console.log("Script loaded");
console.log("Hello world");

button = document.querySelector("button");
button.onclick = () => {
    console.log("YOU CLICKED ME");
    window.location.href = "https://google.com"
};
