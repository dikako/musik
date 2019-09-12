window.addEventListener('load', () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector('.visual');
    const colors = [
        "blueviolet",
        "brown",
        "chartreuse",
        "yellowgreen",
        "darkcyan",
        "hotpink"
    ]

    //Disini letak untuk menuju sounds
    pads.forEach((pad, index) => {
        pad.addEventListener('click', function(){
            sounds[index].currentTime = 0;
            sounds[index].play();

            balonTerbang(index);
        });
    });

    //Disini untuk membuat balon terbang
    const balonTerbang = (index) => {
        const balon = document.createElement("div");
        visual.appendChild(balon);
        balon.style.backgroundColor = colors[index];
        balon.style.animation = 'jump 1s ease';
        balon.addEventListener('animationend', function(){
            visual.removeChild(this)
        });
    }
});
