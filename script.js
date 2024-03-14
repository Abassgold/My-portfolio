const ChangeBgwhite = () => {
    document.getElementById("changeBg").style.backgroundColor = "white"
    changeBg.style.color = " #082032"
    day.style.display = "none"
    night.style.display = "block"
    document.getElementById("clip").style.backgroundColor = "#082032"
    document.getElementById("clip1").style.backgroundColor = "#082032"
    document.getElementById("clip2").style.backgroundColor = "#082032"
    document.getElementById("clip3").style.backgroundColor = "#082032"
    document.getElementById("clip4").style.backgroundColor = "#082032"
    document.getElementById("clip5").style.backgroundColor = "#082032"

    
}


const ChangeBgnight = () => {
    changeBg.style.color = "whitesmoke"
    document.getElementById("changeBg").style.backgroundColor = "#082032"
    day.style.display = "block"
    night.style.display = "none"
    document.getElementById("clip").style.backgroundColor = "white"
    document.getElementById("clip1").style.backgroundColor = "white"
    document.getElementById("clip2").style.backgroundColor = "white"
    document.getElementById("clip3").style.backgroundColor = "white"
    document.getElementById("clip4").style.backgroundColor = "white"
    document.getElementById("clip5").style.backgroundColor = "white"
}