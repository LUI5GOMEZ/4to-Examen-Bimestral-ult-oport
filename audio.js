let audio = document.getElementById("musica7")
let play_btn = document.getElementById("snare")

play_btn.addEventListener("click", () => {
    audio.play();
});

document.addEventListener("keyup", (event) => {
    if(event.key == "l") 
    {
        audio.play();
    }
})