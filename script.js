let buttons = document.querySelectorAll("button");
const assistantContainer = document.getElementById("assistant-container");
const image = document.querySelector("img");
const gifs = [
  "Paw.gif",
  "rick.gif",
  "rem.gif",
  "remRam.gif",
  "genshin.gif",
  "miku.gif",
];
buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    // Hide the assistant
    image.src = gifs[button.id];
    const rect = button.getBoundingClientRect();
    const x = rect.left;
    const y = rect.top;

    console.log(y, x);
    // Move the assistant a small fraction of the distance to the target
    assistantContainer.style.left = x + "px";
    assistantContainer.style.top = y + "px";
  });
});
