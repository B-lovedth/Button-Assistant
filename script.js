let buttons = document.querySelectorAll("button");
const assistantContainer = document.getElementById("assistant-container");
const assistantText = document.getElementById("assistant-text");
const image = document.querySelector("img");
const winHeight = window.innerHeight;
const winWidth = window.innerWidth;
const gifs = [

  {src:"Paw.gif",
    info:"Hello! I'm Paw, The Progrmmer doesn't know what anime I'm from"
},
  {src:"rick.gif",
    info:"Hey there! <burrrpp> I'm Rick, The Progrmmer has finished watching Rick and Morty, i think im his role model"
},
  {src:"rem.gif",
    info:"Moshi Moshi! I'm Rem, The Progrmmer has finished watching Re:Zero, i think im his waifu"
},
  {src:"remRam.gif",
    info:"YO! We're Rem and Ram, The Progrmmer has finished watching Re:Zero, i dont like him - Ram"
},
  {src:"genshin.gif",
    info:"Hello! I'm Genshin, The Progrmmer has finished playing Genshin Impact, i think im his waifu"
},
  {src:"miku.gif",
    info:"Hello! I'm Miku, The Progrmmer has finished watching Go-Toubun no Hanayome, i think im his waifu"
},
];
document.addEventListener("DOMContentLoaded", function () {
    // Move the assistant to the bottom right corner
    assistantContainer.style.transform= `translate(calc(${winWidth}px - 20rem) , calc(${winHeight}px - 8rem))`;
  
});
buttons.forEach(function (button) {
    
  button.addEventListener("focus", function () {
    // Hide the assistant
    image.src = gifs[button.id].src;
    assistantText.textContent = gifs[button.id].info;
    const rect = button.getBoundingClientRect();
    const x = rect.left;
    const y = rect.top;

    console.log(y, x);
    
    assistantContainer.style.transform = "translate(" + x + "px, " + y + "px)";
    
  });
  button.onblur = function () {
    assistantContainer.style.transform= `translate(calc(${winWidth}px - 20rem) , calc(${winHeight}px - 8rem))`;
      image.src = "waiting.gif";
        assistantText.textContent = "Click a button mate...";
  }
  
});

