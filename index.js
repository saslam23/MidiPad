
var volume = document.querySelector("#volume")

document.addEventListener("keypress", (e) => {
makeSound(e.key)
buttonAnimation(e.key);
console.log(e)
})


volume.addEventListener("change", (e) => {
var volume = e.currentTarget.value / 100
    window.localStorage.setItem("volume", volume)
})

const makeSound= (key) =>{

    switch(key){
        case "q":
            var kick = new Audio("./sounds/Kick.wav")
            kick.volume = window.localStorage.getItem("volume")
            kick.play();
            break;
        case "w":
            var clap = new Audio("./sounds/Clap.wav")
            clap.volume = window.localStorage.getItem("volume")
            clap.play(); 
            break;
        case "e":
            var hiHat= new Audio("./sounds/hi-hat.wav")
            hiHat.volume= window.localStorage.getItem("volume")
            hiHat.play();
            break;
        case "r":
            var snare = new Audio("./sounds/snare.wav")
            snare.volume= window.localStorage.getItem("volume")
            snare.play();
            break;
        case "t":
            var snare2 = new Audio("./sounds/snare2.wav")
            snare2.volume = window.localStorage.getItem("volume")
            snare2.play();
            break;
        case "a":
            var crash = new Audio("./sounds/crash.wav")
            crash.volume = window.localStorage.getItem("volume")
            crash.play();
            break;
        case "s":
            var bells = new Audio("./sounds/bells.wav")
            bells.volume = window.localStorage.getItem("volume")
            bells.play();
            break;
        case "d":
            var bang= new Audio("./sounds/bangarang.wav")
            bang.volume = window.localStorage.getItem("volume")
            bang.play();
            break;
        case "f":
            var kick = new Audio("./sounds/kick.wav")
            kick.play();
            break;
    }
}

const buttonAnimation = (currentKey) => {
   var activeButton = document.querySelector("." + currentKey)
   
   activeButton.classList.add("redshadow")

    setTimeout(() =>{
        document.querySelector("." + currentKey).classList.remove("redshadow")
    }, 100)
}

/*
Volume Adjuster...
const
*/